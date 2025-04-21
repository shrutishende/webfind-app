// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { setNumberOfResults } from './numberOfResultsSlice';

// type Props = {}

// export default function NumberOfResults({ }: Props) {
//      const dispatch = useDispatch();
//      const numberOfResults = useSelector((state) => state.numberOfResults)

     
//      const onChange = (val:any) => {
//          dispatch(setNumberOfResults(val));
//      };

//      return (
//          <>
//              <div>Number Of Results</div>
//              {/* <input
//                  type="radio"
//                  name="tweets"
//                  // value="10"
//                  onChange={onChange}
//                  value={numberOfResults}
//                //  defaultValue={10}
//              />
//              <label htmlFor="">10 tweets</label>
//              <input
//                  type="radio"
//                  name="tweets"
//                  //  value="15"
//                  onChange={onChange}
//                  value={numberOfResults}
//                //  defaultValue={10}
//              />
//              <label htmlFor="">15 tweets</label>{" "}
//              <input
//                  type="radio"
//                  name="tweets"
//                //  value="20"
//                  onChange={onChange}
//                  value={numberOfResults}
//                  //   defaultValue={10}
                    
//              />
//              <label htmlFor="">20 tweets</label> */}
//          </>
//      );
// }