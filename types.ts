
import React from 'react';

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  image: string;
}

export interface ExecutiveMember {
  id: string;
  name: string;
  position: string;
  bio: string;
}

export interface Secretariat {
  title: string;
  description: string;
  icon: React.ReactNode;
}
