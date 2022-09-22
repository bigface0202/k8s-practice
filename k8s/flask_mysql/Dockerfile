FROM ubuntu:20.04

# Run getting tools
RUN apt update
RUN apt upgrade
RUN apt install -y git
RUN apt install -y python3
RUN apt install -y python3-pip
# RUN apt-get install -y emacs

# Run getting python3 library
COPY requirements.txt ./
RUN pip3 install --upgrade pip
RUN pip3 install --upgrade setuptools
RUN pip3 install -r requirements.txt
# RUN pip3 install flask
# RUN pip3 install Flask-Cors
# RUN pip3 install mysql-connector-python

ENV APP_PATH=/home
WORKDIR $APP_PATH
ENV HOME $APP_PATH

ENV LC_ALL=C.UTF-8
ENV LANG=C.UTF-8

ENV MYSQL_DATABASE=sample_db
ENV MYSQL_USER=user
ENV MYSQL_PASSWORD=password

ADD app.py /home/

CMD ["flask", "run",  "--host" ,"0.0.0.0" ,"--port",  "5000"]