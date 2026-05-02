<title>Task Management API</title>
<body>
    <h1>Task Management API</h1>

A simple Express.js API for managing tasks and categories.
This project uses in-memory storage, so data resets when the server restarts.

<h2>Features</h2>
    <ul>
        <li>View all tasks</li>
        <li>View a single task by ID</li>
        <li>Create new tasks</li>
        <li>Update tasks</li>
        <li>Delete tasks</li>
        <li>View all categories</li>
        <li>Create new categories</li>
        <li>Request logging middleware</li>
        <li>Basic error handling</li>
    </ul>

<h2>Project Structure</h2>
<pre><code>
├── data/
│   └── storage.js
├── middleware/
│   ├── errorHandler.js
│   ├── logger.js
│   └── validator.js
├── routes/
│   ├── tasks.js
│   └── categories.js
├── server.js
├── package.json
└── README.html
</code></pre>

    
<h2>Installation</h2>
    <p>Install dependencies:</p>

<pre><code>npm install</code></pre>

<h2>Running the Server</h2>
    <p>Start the server:</p>

<pre><code>node server.js</code></pre>

<p>The API will run at:</p>

<pre><code>http://localhost:3000</code></pre>

<h2>API Endpoints</h2>

<h3>Root</h3>
<pre><code>GET /</code></pre>
<p>Returns basic API information.</p>


<h2>Tasks</h2>

<h3>Get All Tasks</h3>
<pre><code>GET /api/tasks</code></pre>

<p>Optional completed filter:</p>
<pre><code>GET /api/tasks?completed=true</code></pre>

<h3>Get One Task</h3>
<pre><code>GET /api/tasks/:id</code></pre>

<h3>Create a Task</h3>
<pre><code>POST /api/tasks</code></pre>

<p>Example JSON body:</p>
<pre><code>{
  "title": "Finish project",
  "categoryId": 1
}</code></pre>

<h3>Update a Task</h3>
<pre><code>PUT /api/tasks/:id</code></pre>

<p>Example JSON body:</p>
    <pre><code>{
  "title": "Updated task",
  "completed": true,
  "categoryId": 2
}</code></pre>

<h3>Delete a Task</h3>
    <pre><code>DELETE /api/tasks/:id</code></pre>


<h2>Categories</h2>

<h3>Get All Categories</h3>
<pre><code>GET /api/categories</code></pre>

<h3>Create a Category</h3>
<pre><code>POST /api/categories</code></pre>

<p>Example JSON body:</p>
    <pre><code>{
  "name": "School"
}</code></pre>

<h2>Notes</h2>
    <p>
        This project stores data in arrays inside <code>data/storage.js</code>.
        It does not use a database, so all changes are temporary and will reset
        when the server restarts.
    </p>
</body>
</html>