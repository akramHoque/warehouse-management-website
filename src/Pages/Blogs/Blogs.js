import React from 'react';

const Blogs = () => {
    return (
        <div className='py-5'>
            <h2 className='text-center text-danger my-5'>My Blogs</h2>
            {/* 13.1 Difference between javascript and nodejs

13.2 When should you use nodejs and when should you use mongodb

13.3 Differences between sql and nosql databases.

13.4 What is the purpose of jwt and how does it work */}

            <h5 className='text-center'>1. Difference Between Javascript and Node js</h5>

            <div className='text-center'>
                <h6>Javascript</h6>
                <p> 1. Javascript is a programming language  used for writing scripts on the website.
                </p>
                <p> 2. Javascript can only be run in the browsers.</p>
                <p>3. Javascript is used in frontend development.</p>
                <p>4. Javascript is capable enough to add HTML and DOM.
                </p>
            </div>

            <div className='text-center'>
                <h6>Node js</h6>

                <p> 1. NodeJS is a Javascript runtime environment.</p>
                <p> 2. We can run Javascript outside the browser with the help of NodeJS.</p>
                <p> 3. It is used on the server-side.</p>
                <p> 4. It does not have capability to add HTML tags.</p>
            </div>

            <h2 className='text-center'>2.</h2>

            <div className='text-center'>
            <h6>When should we use Nodejs?</h6>
            <p>
 Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++ etc...
So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</p>
            </div>

    <div className='text-center'>
    <h6>When should use MongoDB?</h6>
<p>If the application needs to store data in a way that we can efficiently query or update it later, then we would typically use some form of database. There are more popular databases. MongoDB is one of them. MySql, CouchDB, Postgres are examples of other databases.so we can say that mongoDB used to store data in the database</p>
    </div>


    <div className='text-center'>
        <h5>3. Difference between SQL and noSQL</h5>

    <h5>SQL(Structured Qurey Language)</h5>
    
    <p>1. It is Relational database management system (RDBMS)</p>
    <p>2. The database are not suited for hierarchical data storage.</p>
    <p>3. Best for complex queries</p>
    <p>4. Vertically Scalable</p>
    </div>

    <div className='text-center'>
    <h6>noSQL</h6>
    <p>1. Non-relational or distributed database system.</p>
    <p>2. Databases are suited for hierarchical data storage</p>
    <p>3. Database are not good for complex queries</p>
    <p>4. Horizontally scalable</p>
    </div>

    <div>
        
    </div>

        </div>
    );
};

export default Blogs;