import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import Button from '../components/Button';
import Layout from '../components/Layout';
import ProfileForm from '../components/ProfileForm';
import ThemeToggle from '../components/ThemeToggle';
import PostsList from '../components/PostsList';
import ComponentDemo from '../components/ComponentDemo';
import ErrorBoundary from '../components/ErrorBoundary';

const projects = [
  { id: 1, title: 'E-Commerce App', description: 'MERN stack online store' },
  { id: 2, title: 'AI Chatbot', description: 'LangChain powered assistant' },
  { id: 3, title: 'SaaS Dashboard', description: 'Stripe billing + analytics' },
  { id: 4, title: 'Lead Generation Automation', description: 'Automatically collect and organize business leads' },
  { id: 5, title: 'AI Study Assistant', description: 'Helps students summarize notes and generate quizzes' },
  { id: 6, title: 'Freelance Client CRM', description: 'Manage clients, projects, invoices and payments' },
];

const OldWork = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{
      background: isDark ? '#111827' : '#ffffff',
      color: isDark ? '#f9fafb' : '#111827',
      minHeight: '100vh',
      transition: 'all 0.3s'
    }}>
        
      <Header title="My Portfolio" subtitle="MERN + AI Developer" />

      <div style={{ textAlign: 'right', padding: '10px 20px' }}>
        <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
      </div>

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

        <h2 style={{ fontSize: '20px', fontWeight: 'bold', margin: '32px 0 16px' }}>
          Profile Form
        </h2>
        <ProfileForm />

        <ErrorBoundary>
          <PostsList />
        </ErrorBoundary>

        <ComponentDemo />
      </Layout>

      <Footer text="© 2026 — Built with React + Vite" />
    </div>
  );
};

export default OldWork;