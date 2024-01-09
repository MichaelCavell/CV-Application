function GeneralInfo({ name, email, phone, isEditMode }) {
    return (
        <>
        <div className="resumeInfo" style={{ display: !isEditMode ? 'block' : 'none' }}>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <h2>{phone}</h2>
        </div>
        <div className="placeHolderInfo" style={{ display: isEditMode ? 'block' : 'none' }}>
            <h1>Name</h1>
            <h2>Email</h2>
            <h2>Phone</h2>
        </div>
        </>
    )
}

function EducationInfo({ educationHistory }) {
    const EducationRecords = educationHistory.map((record) =>
        <section key={record.id}>
            <section style={{ display: !record.editMode ? 'flex' : 'none' }}>
                <h3>{record.schoolName}</h3>
                <h3> - </h3>
                <h4>{record.titleOfStudy}</h4>
                <h3> - </h3>
                <h5>{record.start} through {record.end}</h5>
                </section>
            <section style={{ display: record.editMode ? 'flex' : 'none' }}>
                <h3>School Name</h3>
                <h3> - </h3>
                <h4>Title Of Study</h4>
                <h3> - </h3>
                <h5>Start Date - End Date</h5>
                </section>
        </section>
    );

    return (
        <>
            <div className="resumeInfo">
                {EducationRecords}
            </div>
        </>
    );
}

function WorkInfo({ workHistory }) {
    const WorkRecords = workHistory.map((record) =>
        <section className="workInfo" key={record.id}>
            <section style={{ display: !record.editMode ? 'flex' : 'none' }}>
                <div>
                <h3>{record.companyName}</h3>
                <h5>{record.startDate} - {record.endDate}</h5>
                </div>
                <div>
                <h4>{record.title}</h4>
                <p>{record.description}</p>
                </div>
                </section>
            <section style={{ display: record.editMode ? 'flex' : 'none' }}>
                <div id="first">
                <h3>Company Name</h3>
                <h5>Start Date - End Date</h5>
                </div>
                <div id="second">
                <h4>Title</h4>
                <p>Description</p>
                </div>
                </section>
        </section>
    );

    return (
        <>
            <div className="resumeInfo">
                {WorkRecords}
            </div>
        </>
    );
}


export function ResumeDisplay({ name, email, phone, generalEditMode, educationHistory, workHistory }) {
    return (
        <div className="resume">
        <section className="GeneralInfo">
            <GeneralInfo
            name={name}
            email={email}
            phone={phone}
            isEditMode={generalEditMode}
            />
        </section>
            <h2>Education</h2>
            <div className="resumeSection">

            <EducationInfo
            educationHistory={educationHistory}
            />
            </div>
            <h2>Experience</h2>
            <div className="resumeSection">

            <WorkInfo 
            workHistory={workHistory}
            />
            </div>
        </div>
    )
}