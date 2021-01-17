from google.cloud import language_v1
import os

os.environ["GOOGLE_APPLICATION_CREDENTIALS"]="server/positweet-a222d7197f97.json"

def get_score(text_content):

    # From the tutorial
    client = language_v1.LanguageServiceClient()
    type_ = language_v1.Document.Type.PLAIN_TEXT

    # Optional Settings
    language = "en"
    document = {"content": text_content, "type_": type_, "language": language}
    encoding_type = language_v1.EncodingType.UTF8

    # Get Content
    text = client.analyze_sentiment(request = {'document': document, 'encoding_type': encoding_type})

    # print("Sentimental Value:", text.document_sentiment.score)
    return text.document_sentiment.score # alternative value - text.document_sentiment.magnitude
    

    # Get sentiment for each sentence if we need it
    # for sentence in text.sentences:
    #     print("Sentence text:", sentence.text.content)
    #     print("Sentence text:", sentence.sentiment.score)
    #     print("Sentence text:", sentence.sentiment.magnitude)

    # Gets the language if we need it
    # print("Language of the text:", text.language)


# Positive Tests
sample_calder = "Good evening Calder. What a beautiful weather we're having!"
print(sample_calder, get_score(sample_calder))

# Negative Tests
sample_richard = "Richard, you suck butt at Valorant. Please uninstall noob!"
print(sample_richard, get_score(sample_richard))