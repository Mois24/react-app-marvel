import './Spinner.scss';

const Spinner = () => {
    return (
        <div className="skeleton">
	  	    <div className="skeleton-left flex1">
	            <div className="square"></div>
	        </div>
  	        <div className="skeleton-right flex2">
			    <div className="line h17 m10"></div>
			    <div className="line h85"></div>
			    <div className="row">
                    <div className="line w30 h35"></div>
                    <div className="line w30 h35"></div>
                </div>
	        </div>
        </div>
    )
}

export default Spinner;