HOW A REQUEST GETS SERVED:
In the client-server architecture, when the client computer sends a request for data to the server through the internet, the server accepts the requested process and deliver the data packets requested back to the client.
Client: a person or an organisation using a particular service. We can also say capabe of receiving information or using a particular service from the service providers.
Server: is a person or medium who serves whatever the client requests with the help of internet. Server provides the information to the client from any remote location
Now to understand how request gets served we take an example of Online Banking Services: When a Bank customer accesses the Online Banking Services with web browser (client) , then the client send the request to the bank's web server. There may be some login credentials stored in the database, then the web server accesses the database as a client. An application server interprets the returned data by applying the bank's business logic, and provides the output to the web server. Finally, the webserver returns the result to the client web browser for display.

In each step of the sequence client-server message exchange, a computer process and return the most desired data. This is the request response pattern. 
The server is generally a more powerful computer system than the client and would be expected to deal with more than one client simultaneously. One of the main advantages of the client/server model is the fact that, provided the clients and servers can understand the data passing between them, it doesn't matter what kind of computer system is used for the client. 
In order to handle the request some procedures are used:
1. AuthTrans(authorization translation): It verify any authorization info, such as name and password.
2. NameTrans(name translation): Translate the logical URI into a local file system path.
3. PathCheck(path checking):Check the local file syatem path for validity and check that the requestor has accesses the privilages to access the resource
4. ObjectType(object typing):Determine the MIME type of the requested resource
5. Input: prepare to read input.
6. Output: prepare to send output.
7. Service: Generate and return response to the client
8. AddLog: Add enteries to log file
9. Error: This step is executed only if error occurs in the previous steps.