import './NewSpinner.scss';

const NewSpinner = () => {
    return (
        <div className='container'>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default NewSpinner;