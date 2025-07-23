-- Insert sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, published, featured, category, tags, views, likes) VALUES
(
  'Advanced Smart Contract Security Patterns',
  'advanced-smart-contract-security-patterns',
  'Exploring cutting-edge security patterns for DeFi protocols and how to implement them effectively in production environments.',
  'Smart contract security is paramount in the DeFi ecosystem. This comprehensive guide covers advanced security patterns including reentrancy guards, access controls, and upgrade mechanisms...',
  true,
  true,
  'Web3 Security',
  ARRAY['Solidity', 'DeFi', 'Security', 'Smart Contracts', 'Blockchain'],
  2500,
  156
),
(
  'Zero-Trust Architecture in Modern Applications',
  'zero-trust-architecture-modern-applications',
  'Building secure, scalable applications with zero-trust principles and practical implementation strategies for enterprise environments.',
  'Zero-trust architecture represents a fundamental shift in cybersecurity thinking. This article explores practical implementation strategies for modern applications...',
  true,
  true,
  'Cybersecurity',
  ARRAY['Zero-Trust', 'Security', 'Architecture', 'Enterprise', 'DevSecOps'],
  3200,
  203
),
(
  'The Future of Web3 Development',
  'future-of-web3-development',
  'Trends, challenges, and opportunities in the evolving Web3 ecosystem from a developer''s perspective.',
  'Web3 development is rapidly evolving with new tools, frameworks, and paradigms emerging regularly. This article examines the current state and future directions...',
  true,
  false,
  'Web3',
  ARRAY['Web3', 'Blockchain', 'Development', 'Future', 'dApps'],
  1800,
  89
),
(
  'AI-Driven Cybersecurity: The Next Frontier',
  'ai-driven-cybersecurity-next-frontier',
  'How artificial intelligence is revolutionizing cybersecurity with predictive threat detection and automated response systems.',
  'Artificial intelligence is transforming cybersecurity by enabling predictive threat detection and automated incident response...',
  true,
  false,
  'AI Security',
  ARRAY['AI', 'Machine Learning', 'Cybersecurity', 'Automation', 'Threat Detection'],
  4100,
  267
),
(
  'Building Secure APIs: Best Practices Guide',
  'building-secure-apis-best-practices',
  'Comprehensive guide to API security covering authentication, authorization, rate limiting, and common vulnerabilities.',
  'API security is crucial in modern application development. This guide covers authentication, authorization, rate limiting, and common vulnerabilities...',
  true,
  false,
  'Development',
  ARRAY['API', 'Security', 'Backend', 'Authentication', 'Best Practices'],
  2900,
  178
);

-- Insert sample newsletter subscribers
INSERT INTO newsletter_subscribers (email) VALUES
('john.doe@example.com'),
('jane.smith@example.com'),
('developer@techcorp.com'),
('security@enterprise.com'),
('admin@startup.io');

-- Insert sample contact messages
INSERT INTO contact_messages (first_name, last_name, email, subject, message, status) VALUES
(
  'John',
  'Doe',
  'john.doe@example.com',
  'Project Collaboration Inquiry',
  'Hi Yusuf, I''m interested in collaborating on a cybersecurity project. Would love to discuss further.',
  'new'
),
(
  'Jane',
  'Smith',
  'jane.smith@techcorp.com',
  'Consulting Services',
  'We''re looking for a security consultant for our Web3 project. Can we schedule a call?',
  'read'
),
(
  'Mike',
  'Johnson',
  'mike@startup.io',
  'Speaking Opportunity',
  'Would you be interested in speaking at our upcoming tech conference about Web3 security?',
  'replied'
);
