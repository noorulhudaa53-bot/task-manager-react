import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';
import Layout from './components/Layout';

const projects = [
  { id: 1, title: 'E-Commerce App', description: 'MERN stack online store' },
  { id: 2, title: 'AI Chatbot', description: 'LangChain powered assistant' },
  { id: 3, title: 'SaaS Dashboard', description: 'Stripe billing + analytics' },
  { id: 4, title: 'Lead Generation Automation',description: 'Automatically collect and organize business leads' },
  { id: 5, title: 'AI Study Assistant', description: 'Helps students summarize notes and generate quizzes' },
  { id: 6, title: 'Freelance Client CRM', description: 'Manage clients, projects, invoices and payments' },
];

function App() {
  return (
    <>
      <Header title="Portfolio" subtitle="MERN + AI Developer" />
      <Layout>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '16px 0' }}>
          My Projects
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
        <div style={{ marginTop: '24px' }}>
          <Button label="View All" variant="primary" onClick={() => alert('Coming soon!')} />
          <Button label="Contact" variant="secondary" />
          <Button label="Delete" variant="danger" />
        </div>
      </Layout>
      <Footer text="© 2026 — Built with React + Vite" />
    </>
  );
}

export default App;