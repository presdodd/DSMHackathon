import React from 'react';
import Link from 'next/link';
import { Bree_Serif } from 'next/font/google';

const About = () => {
  return (
    <div>
      <div className="container mx-auto my-8 p-4 bg-gray-200 rounded shadow">
        <h2 className="text-3xl font-bold mb-4">About FishySolutions</h2>
        <p>
          
        </p>

        <h3 className="text-2xl font-bold mt-4">Contributors</h3>
        <ul className="list-disc ml-6">
          <li>Preston Dodd</li>
          <li>Jack Messerli-Wallace</li>
          <li>Jack Welsh</li>
          <li>Mateo Viscarra</li>
        </ul>

        <h3 className="text-2xl font-bold mt-4">Frameworks and Technologies</h3>
        <p>
          Fishy Fellas is built using cutting-edge frameworks and technologies to ensure a seamless and engaging experience.
        </p>
        <br></br>
        <p className='font-bold'>
          Frameworks used:
        </p>
        <ul className="list-disc ml-6">
          <li>React.js - Frontend Framework</li>
          <li>Next.js - React Framework for Production</li>
          <li>Flask - Python Backend Framework</li>
        </ul>

        <br></br>
        <p className='font-bold'>
          Languages used:
        </p>
        <ul className="list-disc ml-6">
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Python</li>
        </ul>

        <h3 className="text-2xl font-bold mt-4">BuildDSM Hackathon</h3>
        <p>
          Fishy Fellas originated as a project during the very first BuildDSM hackathon.
        </p>
        <p>
          Learn more about <Link href="https://kreativehorizon.com/events/builddsm-v1">BuildDSM</Link> and stay tuned for future events where you can unleash your creativity and be part of exciting projects like Fishy Fellas.
        </p>
      </div>
    </div>
  );
};

export default About;
