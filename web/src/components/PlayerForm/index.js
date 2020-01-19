import React, { useState } from 'react';

function PlayerForm({ onSubmit }) {
    const [account_id, setAccont_id] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            account_id
        });

        setAccont_id('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-block">
                <label htmlFor="account_id">Conta id</label>
                <input 
                name="account_id" 
                id="account_id" 
                required value={account_id} 
                onChange={ e => setAccont_id( e.target.value ) }/>
                <button type="submit">Salvar</button>
            </div>
        </form>
    );
}

export default PlayerForm;