import { useState } from 'react';
import useFetch from '../useFetch';

const PostsList = () => {
  const [page, setPage] = useState(1);
  const [fetchUrl, setFetchUrl] = useState('https://dummyjson.com/posts');
  const postsPerPage = 6;

  const { data: posts, loading, error } = useFetch(fetchUrl);

  // Loading state
    if (loading) {
    return (
        <div style={{ textAlign: 'center', padding: '40px' }}>
        <div style={{
            width: '40px',
            height: '40px',
            border: '4px solid #e5e7eb',
            borderTop: '4px solid #2563eb',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
        }} />
        <p style={{ color: '#6b7280' }}>Loading posts...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
    );
    }

  // Error state
    if (error) {
        return (
        <div style={{ textAlign: 'center', padding: '40px' }}>
            <p style={{ fontSize: '18px', color: 'red' }}>
            Error: {error}
            </p>
            <button
            onClick={() => window.location.reload()}
            style={{ marginTop: '12px', padding: '8px 16px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}
            >
            Try Again
            </button>
        </div>
        );
    }

  // Pagination logic
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (page - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto'}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px', position: 'relative' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>
            Posts from API
        </h2>
        <button
            onClick={() => {
            setPage(1);
            setFetchUrl('https://dummyjson.com/posts?' + Date.now());
            }}
            style={{ padding: '8px 16px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', position: 'absolute', right: '0' }}
        >
            Refresh
        </button>
        </div>

      {/* Posts Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
        {currentPosts.map((post) => (
          <div
            key={post.id}
            style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '16px' }}
          >
            <h3 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', textTransform: 'capitalize' }}>
              {post.title}
            </h3>
            <p style={{ fontSize: '12px', color: '#6b7280' }}>
              {post.body}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #e5e7eb', cursor: page === 1 ? 'not-allowed' : 'pointer', opacity: page === 1 ? 0.5 : 1 }}
        >
          Previous
        </button>

        <span style={{ padding: '8px 16px', fontSize: '14px' }}>
          Page {page} of {totalPages}
        </span>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          style={{ padding: '8px 16px', borderRadius: '6px', border: '1px solid #e5e7eb', cursor: page === totalPages ? 'not-allowed' : 'pointer', opacity: page === totalPages ? 0.5 : 1 }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PostsList;