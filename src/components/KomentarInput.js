import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function KomentarInput({ submitComment }) {
  const [content, onContentChange, setContentValue] = useInput('');

  const submit = () => {
    submitComment(content);
    setContentValue('');
  };

  return (
    <form>
      <textarea value={content} onChange={onContentChange} className="textarea mb-3 textarea-bordered textarea-info h-24 w-full" />
      <button onClick={() => submit()} type="button" className="btn btn-block">Kirim</button>
    </form>
  );
}

KomentarInput.propTypes = {
  submitComment: PropTypes.func.isRequired,
};

export default KomentarInput;
