import React from 'react';

const StateBox = ({ truetext, falsetext, status }) => {
  const STATUS_COLOR = { ACTIVITY: '#1F17FF', DISABLE: '#B3B3B3' };
  const statusColor = {
    status_color: status ? STATUS_COLOR.ACTIVITY : STATUS_COLOR.DISABLE,
  };
  const STATUS_TEXT = { TRUE: truetext, FALSE: falsetext };
  const commonStyle = {
    border: `1px solid ${statusColor.status_color}`,
    borderRadius: '999px',
    padding: '.4rem 1rem',
    width: 'fit-content',
    fontWeight: 600,
    fontSize: '1.1rem',
    color: statusColor.status_color,
  };

  return (
    <>
      {status ? (
        <div className="status-box" style={{ ...commonStyle }}>
          {STATUS_TEXT.TRUE}
        </div>
      ) : (
        <div
          className="status-box"
          style={{...commonStyle}}
        >
          {STATUS_TEXT.FALSE}
        </div>
      )}
    </>
  );
};

export default StateBox;
