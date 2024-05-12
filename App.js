const http = require('http');

console.log("Hello World!")
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/webhook') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            // Parse the payload from GitHub
            const payload = JSON.parse(body);
            
            // Check if the event is a push event
            if (payload && payload.ref && payload.ref.startsWith('refs/heads/')) {
                const branch = payload.ref.replace('refs/heads/', '');
                
                // Check if the branch is the one you want to trigger the build for
                if (branch === 'main') {
                    // Trigger the Jenkins build here
                    // You can use a Jenkins API or a Jenkins library to trigger the build
                    // For example, you can use the 'jenkins-api' package:
                    // const jenkins = require('jenkins-api');
                    // const jenkinsClient = jenkins.build({ baseUrl: 'http://jenkins-url', promisify: true });
                    // jenkinsClient.build('job-name', (err, data) => {
                    //   if (err) {
                    //     console.error('Failed to trigger Jenkins build:', err);
                    //   } else {
                    //     console.log('Jenkins build triggered successfully:', data);
                    //   }
                    // });
                    
                    // Replace the above example code with the actual code to trigger the Jenkins build
                    console.log('Jenkins build triggered for branch:', branch);
                }
            }
        });
        res.statusCode = 200;
        res.end('Webhook received successfully');
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});

server.listen(3000, () => {
    console.log('Webhook server is listening on port 3000');
});