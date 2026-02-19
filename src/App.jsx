import React from 'react';
import './App.css';

function App() {
  const reviews = [
    {
      quote: 'Muskan ma\'am is a great teacher, understands her students really well and is remarkably well-versed in Maths, Social Studies, Science, as well as Mental Ability (logical reasoning). Her lessons are easy to remember and enjoyable for every student. She ensures strong concept clarity, and there has never been a question I asked her that she couldn\'t answer.',
      name: 'Addya Singh',
      classLevel: 'Class 8',
      subject: 'Mathematics, Social Studies, Science, Mental Ability (Logical Reasoning)',
      rating: 5,
    },
    {
      quote: 'I was never interested in studies. Then when Muskan ma\'am came in and started teaching me, my grades and my interest both grew. She has a different way of teaching, and it helped me a lot. Thanks for teaching me!',
      name: 'Cyanne Peter',
      classLevel: 'ICSE Class 10',
      subject: 'EVS, Geography, History, Civics, Information & Communication Technology',
      rating: 5,
    },
    {
      quote: 'Muskan has been my son\'s tutor in 10th grade for Maths and Science subjects. She has been excellent in her approach, preparation, and knowledge. She balances teaching new concepts with regular practice through assignments and mock tests. She is also very flexible in adjusting to sudden requirements. Overall, I would highly recommend Muskan.',
      name: 'Tushar Bhatia',
      classLevel: 'CBSE Class 10',
      subject: 'Biology, Chemistry, Mathematics, Physics',
      rating: 5,
    },
    {
      quote: 'Ma\'am was really helpful in teaching me concepts and used creative ways of explaining so that I could remember them easily. Her explanations were very clear and made studying much easier for me.',
      name: 'Aarna',
      classLevel: 'ICSE Class 8',
      subject: 'Biology, Chemistry, Mathematics, Physics',
      rating: 5,
    },
  ];

  return (
    <div className="bg-cream text-gray-800">
      <header className="hero-gradient text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="uppercase tracking-widest text-sm mb-4 opacity-80 pulse-animation">CBSE, ICSE, ISC</p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">SMALL GROUP ONLINE TUTORING</h1>
              <p className="text-xl md:text-2xl mb-10 opacity-90 font-light">Personalized attention for Grade 9, 10, 11 & 12</p>
              <a href="https://calendar.app.google/qm226CX9qGUy12KY9" target="_blank" rel="noreferrer" className="cta-button inline-block bg-white text-navy font-bold py-4 px-10 rounded-full hover:bg-opacity-90 transition duration-300">
                BOOK DEMO, START EARLY
              </a>
            </div>
            <div className="hidden md:block">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
                <h3 className="text-2xl font-bold mb-6">Quick Facts</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-lg">Only 5 students per batch</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-lg">120 min classes</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-lg">Free demo available</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="text-2xl">✓</span>
                    <span className="text-lg">Starts March 2026</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our Subjects</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Comprehensive coverage for Grade 9, 10, 11 & 12 students</p>
          
          {/* Grade 9 & 10 Section */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-navy mb-3">Grade 9 & 10 (CBSE, ICSE)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 border-2 border-blue-200">
                <div className="text-5xl mb-4">📐</div>
                <h4 className="text-2xl font-bold text-navy mb-2">Mathematics</h4>
                <p className="text-gray-600 text-sm">Problem solving, Concepts & Mental Ability</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 border-2 border-green-200">
                <div className="text-5xl mb-4">🔬</div>
                <h4 className="text-2xl font-bold text-navy mb-2">Science</h4>
                <p className="text-gray-600 text-sm">Physics, Chemistry & Biology</p>
              </div>
              
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 border-2 border-amber-200">
                <div className="text-5xl mb-4">🌍</div>
                <h4 className="text-2xl font-bold text-navy mb-2">Social Studies</h4>
                <p className="text-gray-600 text-sm">History, Geography, Civics & Economics</p>
              </div>
            </div>
          </div>

          {/* Grade 11 & 12 Section */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-3">Grade 11 & 12 (CBSE, ISC)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 border-2 border-purple-200">
                <div className="text-5xl mb-4">⚛️</div>
                <h4 className="text-2xl font-bold text-navy mb-2">Physics</h4>
                <p className="text-gray-600 text-sm">Mechanics, Thermodynamics & Optics</p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 border-2 border-pink-200">
                <div className="text-5xl mb-4">🧪</div>
                <h4 className="text-2xl font-bold text-navy mb-2">Chemistry</h4>
                <p className="text-gray-600 text-sm">Organic, Inorganic & Physical Chemistry</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-md hover:shadow-xl transition duration-300 border-2 border-blue-200">
                <div className="text-5xl mb-4">📐</div>
                <h4 className="text-2xl font-bold text-navy mb-2">Mathematics</h4>
                <p className="text-gray-600 text-sm">Calculus, Algebra & Coordinate Geometry</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-cream to-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">Why Choose NxtGen?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          
            <div className="feature-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="font-bold text-xl text-navy mb-2">Only 5 Students per Batch</h3>
              <p className="text-gray-600">Personal Attention</p>
            </div>

            <div className="feature-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="font-bold text-xl text-navy mb-2">Weekly Doubt Sessions</h3>
              <p className="text-gray-600">Extra learning</p>
            </div>

            <div className="feature-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="font-bold text-xl text-navy mb-2">Concept-First Teaching</h3>
              <p className="text-gray-600">Clear your basics</p>
            </div>

            <div className="feature-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="font-bold text-xl text-navy mb-2">Olympiad Support</h3>
              <p className="text-gray-600">Get ahead with advanced topics</p>
            </div>

            <div className="feature-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="font-bold text-xl text-navy mb-2">Board Exam Pattern</h3>
              <p className="text-gray-600">Prepare in advance</p>
            </div>

            <div className="feature-card bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-gray-100">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-bold text-xl text-navy mb-2">Regular Assignments</h3>
              <p className="text-gray-600">Progress Tracking</p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-4">Student Reviews</h2>
          <p className="text-lg text-gray-600 text-center mb-12">What students and parents say about NxtGen classes</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((review, index) => (
              <article key={`${review.name}-${index}`} className="bg-cream rounded-2xl p-7 border border-gray-200 shadow-md hover:shadow-lg transition duration-300">
                <div className="text-amber-500 text-xl mb-4" aria-label={`${review.rating} star rating`}>
                  {'★'.repeat(review.rating)}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">“{review.quote}”</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-navy text-lg">{review.name}</p>
                  <p className="text-sm text-gray-600">{review.classLevel}</p>
                  <p className="text-sm text-gray-600 mt-1">Subjects: {review.subject}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-sage text-white py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Class Details</h2>
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-5">
                  <div>
                    <p className="text-sm opacity-80 mb-1">Mode</p>
                    <p className="text-2xl font-bold">Online</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 mb-1">Duration</p>
                    <p className="text-2xl font-bold">120 minutes/class</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-80 mb-1">Batch Size</p>
                    <p className="text-2xl font-bold">5 Students Max</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Admission Process</h2>
              <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="space-y-5">
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl flex-shrink-0">1</span>
                    <div>
                      <p className="text-lg font-semibold mb-1">Free Demo Class</p>
                      <p className="text-sm opacity-90">Experience our teaching style</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl flex-shrink-0">2</span>
                    <div>
                      <p className="text-lg font-semibold mb-1">Admission Exam</p>
                      <p className="text-sm opacity-90">Quick assessment test</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-3xl flex-shrink-0">3</span>
                    <div>
                      <p className="text-lg font-semibold mb-1">Batch Allotment</p>
                      <p className="text-sm opacity-90">Classes start onwards</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white border-opacity-30 pt-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-lg opacity-90 mb-6">Book your free demo class today</p>
                <a href="https://wa.me/919501366244" target="_blank" rel="noreferrer" className="inline-block bg-navy text-white py-3 px-8 rounded-lg hover:bg-opacity-90 transition duration-300 font-semibold shadow-lg hover:shadow-xl">
                  WhatsApp Us
                </a>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="bg-white p-4 rounded-xl shadow-lg">
                  <img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/919501366244" alt="WhatsApp QR Code" className="w-32 h-32" />
                  <p className="text-center text-navy text-sm mt-2 font-semibold">Scan to Chat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
