import PropTypes from 'prop-types';
import { formatNumber } from '../utils';
import styled from '@emotion/styled';

const StatisticContainer = styled('div')(({ theme }) => ({
  fontSize: theme.fonts[0],
}));

export default function Tweet({
  content,
  createdAt,
  name,
  photo,
  username,
  statistics,
}) {
  const { commentsCount, retweetsCount, likesCount, viewsCount } = statistics;
  return (
    <div className="d-flex gap-2 py-2 border-bottom">
      <div className="d-flex">
        <div className="p-2">
          <img src={photo} className="rounded-circle" />
        </div>
      </div>
      <article className="p-2d-flex flex-column gap-1">
        <header>
          <strong>{name}</strong>{' '}
          <span className="text-secondary">
            @{username} • {createdAt}{' '}
          </span>
        </header>
        <div>{content}</div>
        <footer className="d-flex justify-content-between">
          <StatisticContainer>
            <i className="bi bi-chat"></i> {formatNumber(commentsCount)}
          </StatisticContainer>
          <StatisticContainer>
            <i className="bi bi-repeat"></i> {formatNumber(retweetsCount)}
          </StatisticContainer>
          <StatisticContainer>
            <i className="bi bi-heart"></i> {formatNumber(likesCount)}
          </StatisticContainer>
          <StatisticContainer>
            <i className="bi bi-bar-chart"></i> {formatNumber(viewsCount)}
          </StatisticContainer>
          <div className="me-5">
            <i className="bi bi-box-arrow-up"></i>
          </div>
        </footer>
      </article>
    </div>
  );
}

Tweet.propTypes = {
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  statistics: PropTypes.shape({
    commentsCount: PropTypes.number,
    retweetsCount: PropTypes.number,
    likesCount: PropTypes.number,
    viewsCount: PropTypes.number,
  }),
  username: PropTypes.string.isRequired,
};

Tweet.defaultProps = {
  content:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod dicta odio consequuntur labore quia nihil praesentium rerum eum atque. Aut porro quos quia eligendi quod nisi cumque vitae animi minima?',
  createdAt: '',
  name: 'Fabio Calderon',
  photo: 'https://placehold.co/40x40',
  statistics: {
    commentsCount: 2345,
    retweetsCount: 1234567,
    likesCount: 54321,
    viewsCount: 1234567,
  },
  username: 'fcalderon',
};
