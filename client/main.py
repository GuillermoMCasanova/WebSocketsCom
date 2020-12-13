# Libraries
import socketio

sio = socketio.Client()


@sio.event
def connect():
    print('Connected successfully')


@sio.event
def event_001(data):
    print(data)


@sio.event
def disconnect():
    print('Disconected from server')


if __name__ == "__main__":
    try:
        # Change the url for the Websockets server
        sio.connect(url='https://high-empire-298417.rj.r.appspot.com')
        sio.wait()

    except socketio.exceptions.ConnectionError:
        print('Error to connect to websockets server.')
