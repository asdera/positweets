import requests
import os
import json
from threading import Thread

from flask import Flask, Response, jsonify

import sent_analysis


TWEET_STACK_LEN = 50
tweet_stack = []

def auth():
    #return os.environ.get("BEARER_TOKEN")
    return "AAAAAAAAAAAAAAAAAAAAAIlmLwEAAAAAp5%2BwPMn7EmkkXpukWik%2Bq2OjZO8%3DHHmNSIe22IHtagu3qQeXfiN01akVMaUraucO8huZlsBIgCnSMV"


def create_url():
    return "https://api.twitter.com/2/tweets/sample/stream"


def create_headers(bearer_token):
    headers = {"Authorization": "Bearer {}".format(bearer_token)}
    return headers


def connect_to_endpoint(url, headers):
    response = requests.request("GET", url, headers=headers, stream=True)
    for response_line in response.iter_lines():
        if response_line:
            json_response = json.loads(response_line)
            add_if_posi(json_response["data"])
            #print(json.dumps(json_response, indent=4, sort_keys=True))

    if response.status_code != 200:
        raise Exception(
            "Request returned an error: {} {}".format(
                response.status_code, response.text
            )
        )


## TODO: ANDREW YOUR CODE GOES HERE.
def add_if_posi(tweet):
    score = sent_analysis.get_score(tweet["text"])

    #if score > 0.5:
    if True:
        # lazy implementation of stack since python's stdlib doesnt seem to have one
        # also fill array up to the TWEET_STACK_LEN, then start deleting
        if len(tweet_stack) > TWEET_STACK_LEN:
            tweet_stack.pop(0)
        tweet_stack.append(tweet)


def get_tweets():
    bearer_token = auth()
    url = create_url()
    headers = create_headers(bearer_token)
    timeout = 0
    while True:
        connect_to_endpoint(url, headers)
        timeout += 1

# start streaming tweets & filtering them in a seperate thread.
p = Thread(target=get_tweets)
p.start()

app = Flask(__name__, static_url_path='', static_folder='public')

@app.route('/get_tweets')
def get_tweets_endpoint():
    return jsonify(tweet_stack)


@app.route('/')
def root():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.run(host="0.0.0.0")
