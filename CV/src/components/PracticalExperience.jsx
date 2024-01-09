function Input({ label, name, value, onChange, type='text' }) {
    return (
        <label>
            {label}
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    onChange={onChange}
                    rows="4" // You can adjust the rows and cols as needed
                    cols="50"
                />
            ) : (
                <input
                    type={type || 'text'} // Defaults to 'text' if type is not provided
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            )}
        </label>
    );
}

export function WorkHistory ({ workHistory, handleWorkRecordChange, addWorkRecord, deleteWorkRecord, toggleWorkRecordEditMode }) {
    const WorkRecords = workHistory.map((record) =>
    <section key={record.id}>
        <section className='inputs' style={{ display: record.editMode ? 'flex' : 'none' }}>
            <div>
            <Input
            label=' Company Name: '
            name='companyName'
            value={record.companyName}
            onChange={(e) => handleWorkRecordChange(record.id, e)}
            />
            <Input
            label=' Title: '
            name='title'
            value={record.title}
            onChange={(e) => handleWorkRecordChange(record.id, e)}
            />
            <Input
            type='date'
            label=' Start Date: '
            name='startDate'
            value={record.startDate}
            onChange={(e) => handleWorkRecordChange(record.id, e)}
            />
            <Input
            type='date'
            label=' End Date: '
            name='endDate'
            value={record.endDate}
            onChange={(e) => handleWorkRecordChange(record.id, e)}
            />
            </div>
            <div id="textArea">
            <Input
            type='textarea'
            label=' Description: '
            name='description'
            value={record.description}
            onChange={(e) => handleWorkRecordChange(record.id, e)}
            />
            </div>
        </section>
        <button onClick={() => toggleWorkRecordEditMode(record.id)}>{record.editMode ? 'Submit' : `Edit '${record.companyName}'`}</button>
        <button onClick={() => deleteWorkRecord(record.id)}>Delete</button>

    </section>)
    return (
        <>
        {WorkRecords}
        <button onClick={addWorkRecord}>Add</button>
        </>
    )
}