import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function AddNewInput({ create }) {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  return (
    <form>
      <input type="text" value={title} onChange={onTitleChange} placeholder="Judul" className="input mb-3 input-bordered input-info w-full" />
      <input type="text" value={category} onChange={onCategoryChange} placeholder="Kategori" className="input mb-3 input-bordered input-info w-full" />
      <textarea value={body} onChange={onBodyChange} className="textarea mb-3 textarea-bordered textarea-info h-24 w-full" />
      <button onClick={() => create({ title, body, category })} type="button" className="btn btn-block">Buat</button>
    </form>
  );
}

AddNewInput.propTypes = {
  create: PropTypes.func.isRequired,
};

export default AddNewInput;
