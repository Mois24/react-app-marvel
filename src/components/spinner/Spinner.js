import './Spinner.scss';

const Spinner = () => {
    return (
        <div class="skeleton">
	  	    <div class="skeleton-left flex1">
	            <div class="square"></div>
	        </div>
  	        <div class="skeleton-right flex2">
			    <div class="line h17 m10"></div>
			    <div class="line h85"></div>
			    <div className="row">
                    <div class="line w30 h35"></div>
                    <div class="line w30 h35"></div>
                </div>
	        </div>
        </div>
    )
}

export default Spinner;