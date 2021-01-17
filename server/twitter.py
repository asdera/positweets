import requests
import os
import json

import sent_analysis

# To set your environment variables in your terminal run the following line:
# export 'BEARER_TOKEN'='<your_bearer_token>'


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
    print(response.status_code)
    for response_line in response.iter_lines():
        if response_line:
            json_response = json.loads(response_line)
            get_sent(json_response["data"])
            #print(json.dumps(json_response, indent=4, sort_keys=True))

    if response.status_code != 200:
        raise Exception(
            "Request returned an error: {} {}".format(
                response.status_code, response.text
            )
        )


## TODO: ANDREW YOUR CODE GOES HERE.
def get_sent(tweet):
    print(sent_analysis.get_score(tweet["text"]))


def main():
    bearer_token = auth()
    url = create_url()
    headers = create_headers(bearer_token)
    timeout = 0
    while True:
        connect_to_endpoint(url, headers)
        timeout += 1


if __name__ == "__main__":
    main()
