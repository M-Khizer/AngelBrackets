// src/App.js
import React, { useState } from 'react';
import './App.css';
import profilepic from './assets/default_profile_picture.png';
import react from './assets/react-logo.png';
import vue from './assets/vue.png';
import diamond from './assets/diamond.png';
import python from './assets/python.png';
import xd from './assets/xd.png';
import figma from './assets/figma.png';

const cardsData = [
  {
    id: 1,
    image: profilepic,
    name: 'Athena G',
    designation: 'Product Designer',
    skills: [diamond, xd, figma],
    experience: 'Senior Solution Architect who has mastered .NET technologies to build advanced desktop and web applications.',
  },
  {
    id: 2,
    image: profilepic,
    name: 'Thomas Ed',
    designation: 'Front-end Developer',
    skills: [react, vue],
    experience: 'Senior Solution Architect who has mastered .NET technologies to build advanced desktop and web applications',
  },
  {
    id: 3,
    image: profilepic,
    name: 'Jesse Showalter',
    designation: 'Back-end Developer',
    skills: [python, vue, react],
    experience: 'Senior Solution Architect who has mastered .NET technologies to build advanced desktop and web applications.',
  },
  {
    id: 4,
    image: profilepic,
    name: 'Chrisitne',
    designation: 'Dev-Ops Developer',
    skills: [python, xd, react],
    experience: 'Senior Solution Architect who has mastered .NET technologies to build advanced desktop and web applications.',
  },
];

  const Card = ({ image, designation, skills, experience, name }) => {
    return (
      <div style={{ width: '320px' }} className="flex-shrink-0">
        <div className="bg-white bg-opacity-5 p-4 rounded-lg shadow-md ">
          <img src={image} alt="Person" className="w-16 h-16 rounded-full mb-4 " />
          <h2 className="text-xl text-white font-bold mb-2">{name}</h2>
          <h2 className="text-xl text-white mb-2">{designation}</h2>
          <p className="text-gray-600 mb-4">{experience}</p>
          <div className="flex justify-start">
            {skills.map((skill, index) => (
              <img
                key={index}
                src={skill}
                alt='image'
                className="w-8 h-8 mx-2"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(44%) sepia(98%) saturate(7052%) hue-rotate(96deg) brightness(103%) contrast(105%)',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  };

const App = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const handleForward = () => {
    setCurrentCard((prevCard) => (prevCard + 1) % cardsData.length);
  };

  const handleBackward = () => {
    setCurrentCard((prevCard) => (prevCard - 1 + cardsData.length) % cardsData.length);
  };

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-4xl text-white font-bold mb-4">Angle Brackets Mobile App Development Experts</h1>
      <h1 className="text-4xl text-white font-bold mb-4">development experts</h1>

      <p className="text-center text-gray-600 mb-8">Angle Brackets will quickly assemble a team of Front-end developers for your needs</p>

      <div className="relative w-80 mx-auto">
        <div
          className="flex justify-start items-start transition-transform ease-in-out duration-300 gap-10"
          style={{ transform: `translateX(-${100 * currentCard}%)` }}
        >
          {cardsData.map((card, index) => (
            <div key={card.id} className="min-w-[280px] flex-shrink-0">
              <Card {...card} />
            </div>
          ))}
        </div>
      </div>

      {cardsData.length > 1 && (
        <div className="mt-4 flex justify-between w-80 mx-auto">
          <span className="material-symbols-outlined p-2 rounded-full shadow-md cursor-pointer" onClick={handleBackward}>
            arrow_back
          </span>
          <span className="material-symbols-outlined p-2 rounded-full shadow-md cursor-pointer" onClick={handleForward}>
            arrow_forward
          </span>
        </div>
      )}
    </div>
  );
};

export default App;
