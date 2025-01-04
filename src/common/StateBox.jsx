import React from 'react';

const StateBox = ({ truetext, falsetext, status }) => {
  const STATUS_COLOR = { ACTIVITY: '#1F17FF', DISABLE: '#B3B3B3' };
  const STATUS_TEXT = { TRUE: truetext, FALSE: falsetext };
  const commonStyle = {
    borderRadius: '999px',
    padding: '.4rem 1rem',
    width: 'fit-content',
    fontWeight: 600,
    fontSize: '1.1rem',
  };
  console.log('status', status);

  return (
    <>
      {status == 'true' ? (
        <div
          className="status-box"
          style={{
            ...commonStyle,
            border: `1px solid ${STATUS_COLOR.ACTIVITY}`,
            color: STATUS_COLOR.ACTIVITY,
          }}
        >
          {STATUS_TEXT.TRUE}
        </div>
      ) : (
        <div className="status-box" style={{ 
          ...commonStyle,
          border: `1px solid ${STATUS_COLOR.DISABLE}`,
          color: STATUS_COLOR.DISABLE,
          }}>
          {STATUS_TEXT.FALSE}
        </div>
      )}
    </>
  );
};

export default StateBox;
