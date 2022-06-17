import {NextPage} from "next";
import {SyntheticEvent, useState} from "react";
import {FieldType} from "../../../schemas/FieldType";

const CreateForm: NextPage = () => {
    const [state, setState] = useState({
        fieldTypes: Object.keys(FieldType),
        name: '',
        title: '',
        buttonText: '',
        isEditable: true,
        fields: [
            {
                name: '',
                label: '',
                type: FieldType.Text,
                placeholder: '',
                isRequired: false
            }
        ]
    })

    const saveWebform = (event: SyntheticEvent) => {
        event.preventDefault()
        // do something
    }

    const addNewField = (type: FieldType) => {
        switch (type) {
            case FieldType.Checkbox:
            case FieldType.Radio:
            case FieldType.Select:
                // add options
                break
            case FieldType.Textarea:
                // add col and row value
                break
            case FieldType.Number:
                // add min, max, and step
                break
            case FieldType.FileUpload:
                // add extension filter
                break
            case FieldType.Date:
            case FieldType.Time:
            case FieldType.DateTime:
                // data specific
                break
            default:
                //
        }
    }

    return (
        <div className="container mt-3 row">
            <div className="card">
                <div className="card-title">Create new webform</div>
                <form
                    className="card-body"
                    onSubmit={saveWebform}
                >

                    <div className="form-group mb-2">
                        <label htmlFor="formName" className="control-label">Form Name</label>
                        <input
                            id="formName"
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group mb-2">
                        <label htmlFor="formTitle" className="control-label">Form Title</label>
                        <input
                            id="formTitle"
                            type="text"
                            className="form-control"
                        />
                    </div>

                    <div className="form-group mb-2">
                        <div className="form-check">
                            <input
                                id="isEditable"
                                type="checkbox"
                                className="form-check-input"
                                checked={state.isEditable}
                                onChange={() => setState(prevState => ({...prevState, isEditable: !state.isEditable}))}
                            />
                            <label htmlFor="isEditable" className="form-check-label pl-1">{ !!state.isEditable ? 'Yes' : 'No' }</label>
                        </div>
                    </div>

                    <div className="border border-1 p-2 mb-4">
                        <div className="border border-1 p-2 mb-2">
                            <div className="form-group mb-2">
                                <label className="control-label">Name</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="form-group mb-2">
                                <label className="control-label">Label</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="form-group mb-2">
                                <label className="control-label">Placeholder</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="form-group mb-2">
                                <label className="control-label">Type</label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className="form-group mb-2">
                                <label className="control-label">Options</label>
                                <div className="input-group mb-2">
                                    <input type="text" className="form-control" />
                                    <button className="btn btn-outline-danger">
                                        <i className="fa fa-minus"></i>
                                    </button>
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" />
                                    <button className="btn btn-outline-success">
                                        <i className="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="d-grid gap-2">
                            <button className="btn btn-info" id="addMoreFieldBtn">
                                Add new Field
                            </button>
                        </div>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Create Webform</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreateForm