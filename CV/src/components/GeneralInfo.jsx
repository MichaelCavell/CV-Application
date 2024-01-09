
function Input({ label, name, value, onChange }) {
    return (
    <label>
        {label}
        <input
        name={name}
        value={value}
        onChange={onChange}
        />
      </label> 
    )
}

export function GeneralInfo({ name, email, phone, onChange, isEditMode, toggleEditMode }) {
    return (
    <section>
        <section className="inputs" style={{ display: isEditMode ? 'inline' : 'none' }}>
            <Input
            label=' Name: '
            name='name'
            value={name}
            onChange={onChange}
            />
            <Input
            label=' Email: '
            name='email'
            value={email}
            onChange={onChange}
            />
            <Input
            label=' Phone: '
            name='phone'
            value={phone}
            onChange={onChange}
            />
        </section>
        <button onClick={toggleEditMode}>{isEditMode ? 'Submit' : 'Edit General Info'}</button>
    </section>
    )
}