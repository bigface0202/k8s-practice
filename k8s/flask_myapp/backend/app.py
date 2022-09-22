from flask import Flask, request, jsonify
from flask_cors import CORS
import os 

import mysql.connector

app = Flask(__name__)
CORS(app)

conn = mysql.connector.connect(
    host = 'mysql',
    port = 3306,
    user = 'root',
    password = 'password',
    database = 'SAMPLE'
)


@app.route('/', methods=['GET'])
def select_all():

    conn.ping(reconnect=True)
    cur = conn.cursor()
    cur.execute('SELECT * FROM COMMENT')
    sql_result = cur.fetchall()

    result = []

    for item in sql_result :
        index = item[0]
        title = item[1]
        category = item[2]
        content = item[3]

        result.append(dict(index=index, title=title, category=category, content=content))

    return jsonify(results=result)