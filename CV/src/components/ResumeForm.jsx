import { GeneralInfo } from "./GeneralInfo";
import { EducationHistory } from "./EducationHistory";
import { WorkHistory } from "./PracticalExperience";

export function ResumeForm({ name, email, phone, onChange, generalEditMode, toggleGeneralEdit, educationHistory, handleEducationRecordChange, deleteEducationRecord, addEducationRecord, toggleEducationRecordEditMode, workHistory, handleWorkRecordChange, addWorkRecord, deleteWorkRecord, toggleWorkRecordEditMode }) {
    return (
    <>
    <h1>General Info</h1>
    <GeneralInfo
    name={name}
    email={email}
    phone={phone}
    onChange={onChange}
    isEditMode={generalEditMode}
    toggleEditMode={toggleGeneralEdit}
    />
    <h1>Education</h1>
    <EducationHistory
    educationHistory={educationHistory}
    handleEducationRecordChange={handleEducationRecordChange}
    deleteEducationRecord={deleteEducationRecord}
    addEducationRecord={addEducationRecord}
    toggleEducationRecordEditMode={toggleEducationRecordEditMode}
    />
    <h1>Experience</h1>
    <WorkHistory
    workHistory={workHistory}
    handleWorkRecordChange={handleWorkRecordChange}
    addWorkRecord={addWorkRecord}
    deleteWorkRecord={deleteWorkRecord}
    toggleWorkRecordEditMode={toggleWorkRecordEditMode}
    />
    </>
)
}