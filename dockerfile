FROM node:20-alpine3.19
WORKDIR /app
COPY package*.json .
RUN npm i -yes --verbose
COPY . .
# expo ports
EXPOSE 19000
EXPOSE 19001
EXPOSE 19002
EXPOSE 8081
CMD ["npm", "start"]
# docker run -it -p 19000:19000 -p 19001:19001 -p 19002:19002 -p 8081:8081 kickoff:v1.0
#  docker run -it -p 19000:19000 -p 19001:19001 -p 19002:19002 kickoff