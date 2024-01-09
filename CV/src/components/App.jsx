import { useState } from 'react';
import { ResumeForm } from './ResumeForm';
import { ResumeDisplay } from "./ResumeDisplay";
import { v4 as uuidv4 } from 'uuid';

export function App () {
    //general
    const [generalInfo, setGeneralInfo] = useState(
        {
            name: '',
            email: '',
            phone: '',
        }
    )

    function handleGeneralInfoChange(e) {
        const { name, value } = e.target;
        setGeneralInfo({ ...generalInfo, [name]: value });
    }

    const [generalEditMode, setGeneralEditMode] = useState(true);

    function toggleGeneralEdit() {
        setGeneralEditMode(!generalEditMode);
    }
    //education
    const [educationHistory, setEducationHistory] = useState(
        [{
            schoolName: '',
            titleOfStudy: '',
            start: '',
            end: '',
            id: uuidv4(),
            editMode: true,
        }]
    )

    function handleEducationRecordChange(id, e) {
        const { name, value } = e.target;
        setEducationHistory((educationHistory) => {
            return educationHistory.map((record) =>
                record.id === id ? { ...record, [name]: value } : record
            );
        });
    } 

    function deleteEducationRecord(id) {
        setEducationHistory(educationHistory.filter(record => record.id !== id));
    }

    function addEducationRecord() {
        const newRecord = {
            schoolName: '',
            titleOfStudy: '',
            start: '',
            end: '',
            id: uuidv4(),
            editMode: true,
        };
        setEducationHistory([...educationHistory, newRecord]);
    }

    function toggleEducationRecordEditMode(id) {
        setEducationHistory(educationHistory.map(record => 
            record.id === id ? { ...record, editMode: !record.editMode } : record
        ));
    }

    //work
    const [workHistory, setWorkHistory] = useState(
        [{
            companyName: '',
            title: '',
            description: '',
            startDate: '',
            endDate: '',
            id: uuidv4(),
            editMode: true,
        }]
    )

    function handleWorkRecordChange(id, e) {
        const { name, value } = e.target;
        setWorkHistory((workHistory) => {
            return workHistory.map((record) =>
                record.id === id ? { ...record, [name]: value } : record
            );
        });
    } 

    function addWorkRecord() {
        const newRecord = {
            companyName: '',
            title: '',
            description: '',
            startDate: '',
            endDate: '',
            id: uuidv4(),
            editMode: true,
        };
        setWorkHistory([...workHistory, newRecord]);
    }

    function deleteWorkRecord(id) {
        setWorkHistory(workHistory.filter(record => record.id !== id));
    }

    function toggleWorkRecordEditMode(id) {
        setWorkHistory(workHistory.map(record => 
            record.id === id ? { ...record, editMode: !record.editMode } : record
        ));
    }
    
    return (
        <>
        <h1>Very Professional Resume Builder</h1>
        <ResumeForm
        name={generalInfo.name}
        email={generalInfo.email}
        phone={generalInfo.phone}
        onChange={handleGeneralInfoChange}
        generalEditMode={generalEditMode}
        toggleGeneralEdit={toggleGeneralEdit}
        educationHistory={educationHistory}
        handleEducationRecordChange={handleEducationRecordChange}
        deleteEducationRecord={deleteEducationRecord}
        addEducationRecord={addEducationRecord}
        toggleEducationRecordEditMode={toggleEducationRecordEditMode}
        workHistory={workHistory}
        handleWorkRecordChange={handleWorkRecordChange}
        addWorkRecord={addWorkRecord}
        deleteWorkRecord={deleteWorkRecord}
        toggleWorkRecordEditMode={toggleWorkRecordEditMode}
        />
        <ResumeDisplay
        name={generalInfo.name}
        email={generalInfo.email}
        phone={generalInfo.phone}
        generalEditMode={generalEditMode}
        educationHistory={educationHistory}
        workHistory={workHistory}
        />
        </>
    )
}