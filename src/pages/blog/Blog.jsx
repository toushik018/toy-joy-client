import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-500 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-white font-bold mb-8">Tech Blog</h1>

        <div
          className="bg-white rounded-lg shadow-lg p-8"
          data-aos="fade-up"
        >
          <h2 className="text-2xl text-purple-500 font-bold mb-4">
            What is an Access Token and Refresh Token?
          </h2>
          <p className="text-gray-700 mb-4">
            An access token is a credential used to access protected resources
            on behalf of a user. It is typically a short-lived token that
            includes information about the user's permissions and is issued
            after successful authentication.
          </p>
          <p className="text-gray-700 mb-4">
            A refresh token is a long-lived token used to obtain a new access
            token without having to re-authenticate the user. It is used to
            maintain a user's session and is typically stored securely on the
            client-side, such as in an HTTP-only cookie or local storage.
          </p>

          <h2 className="text-2xl text-purple-500 font-bold mb-4">
            Comparing SQL and NoSQL Databases
          </h2>
          <p className="text-gray-700 mb-4">
            SQL databases are relational databases that store data in tables
            with predefined schemas. They provide strong consistency and
            support complex queries, making them suitable for structured data
            and applications that require strict data integrity.
          </p>
          <p className="text-gray-700 mb-4">
            NoSQL databases, on the other hand, are non-relational databases
            that store data in flexible, schema-less formats like JSON or BSON.
            They provide high scalability, horizontal scaling, and flexible
            data models, making them suitable for handling large amounts of
            unstructured or semi-structured data and applications that require
            high performance and scalability.
          </p>

          <h2 className="text-2xl text-purple-500 font-bold mb-4">
            Express.js and Nest.js
          </h2>
          <p className="text-gray-700 mb-4">
            Express.js is a minimalist web application framework for Node.js.
            It provides a set of features and middleware to build web
            applications and APIs easily. Express.js follows the concept of
            middleware, allowing developers to add functionality in a modular
            way.
          </p>
          <p className="text-gray-700 mb-4">
            Nest.js, on the other hand, is a progressive Node.js framework
            built with TypeScript. It combines elements of object-oriented
            programming, functional programming, and functional reactive
            programming. Nest.js provides a structured architecture, dependency
            injection, and a powerful module system for building scalable and
            maintainable applications.
          </p>

          <h2 className="text-2xl text-purple-500 font-bold mb-4">
            MongoDB Aggregate
          </h2>
          <p className="text-gray-700 mb-4">
            MongoDB's aggregate framework is a powerful way to perform advanced
            data aggregation operations on collections. It allows you to
            process and transform data using a pipeline of stages, including
            filtering, grouping, sorting, projecting, and more.
          </p>
          <p className="text-gray-700 mb-4">
            The aggregate framework provides a flexible and efficient way to
            analyze and aggregate data in MongoDB, enabling complex data
            manipulations and aggregations that go beyond simple querying.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
