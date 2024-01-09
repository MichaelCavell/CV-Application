function Input({ label, name, value, onChange, type='text' }) {
    return (
    <label>
        {label}
        <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        />
    </label> 
    )
}

export function EducationHistory({ educationHistory, handleEducationRecordChange, deleteEducationRecord, addEducationRecord, toggleEducationRecordEditMode }) { 
    const EducationRecords = educationHistory.map((record) =>
    <section key={record.id}>
        <section className='inputs' style={{ display: record.editMode ? 'inline' : 'none' }}>
            <Input
            label=' School Name: '
            name='schoolName'
            value={record.schoolName}
            onChange={(e) => handleEducationRecordChange(record.id, e)}
            />
            <Input
            label=' Title of Study: '
            name='titleOfStudy'
            value={record.titleOfStudy}
            onChange={(e) => handleEducationRecordChange(record.id, e)}
            />
            <Input
            type='date'
            label=' Start Date: '
            name='start'
            value={record.start}
            onChange={(e) => handleEducationRecordChange(record.id, e)}
            />
            <Input
            type='date'
            label=' End Date: '
            name='end'
            value={record.end}
            onChange={(e) => handleEducationRecordChange(record.id, e)}
            />
        </section>
        <button onClick={() => toggleEducationRecordEditMode(record.id)}>{record.editMode ? 'Submit' : `Edit '${record.schoolName}'`}</button>
        <button onClick={() => deleteEducationRecord(record.id)}>Delete</button>
    </section>
    )

    return (
        <>
        {EducationRecords}
        <button onClick={addEducationRecord}>Add</button>
        </>
    )
}