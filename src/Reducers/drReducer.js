import { initialState } from "../context/Context";

const drReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FILTER-DR":
      let x = state.doctorsData.filter(
        (curEle) => curEle.Specialization === action.payload
      );
      return {
        ...state,
        doctorsData: x,
      };
    case 'Add-DR-DATA':
      let zy=state.doctorsData
      zy[state.doctorsData.length]=action.payload;
        return{
            ...state,
            doctorsData:zy,
        }
    case "DELETE-DR-DATA":
      // let b=state.doctorsData.filter(
      //   (curEle) => curEle.Id !== parseInt(action.payload))
      return {
        ...state,
        doctorsData: state.doctorsData.filter(
          (curEle) => curEle.Id !== parseInt(action.payload)
        ),
      };
    case "UPDATE-DR-DATA":
      const {
        Name,
        Gender,
        Text,
        Id,
        DepartmentId,
        Color,
        Education,
        Specialization,
        Experience,
        Designation,
        DutyTiming,
        Email,
        Mobile,
        DrProfile,
      } = action.payload;
      // console.log("Id", typeof Id);
      let xy = state.doctorsData.map((curEle, index) => {
        // console.log(curEle.Id, Id);
        if (curEle.Id === Id)
          return {
            ...curEle,
            Name: Name,
            Gender: Gender,
            Text: Text,
            Id: Id,
            DepartmentId: DepartmentId,
            Color: Color,
            Education: Education,
            Specialization: Specialization,
            Experience: Experience,
            Designation: Designation,
            DutyTiming: DutyTiming,
            Email: Email,
            Mobile: Mobile,
            DrProfile: DrProfile,
          };
        return {
          ...curEle,
        };
      });
      return {
        ...state,
        doctorsData: xy,
      };
 
    case 'ADD-PATIENT':
      // console.log('ADD-PATIENT',action.payload)
      let z=state.patientsData
      z[state.patientsData.length]=action.payload;
      return{
        ...state,
        patientsData:z
      }
    
    case 'ADD-CALENDAR-DATA':
        let yz=state.hospitalData
        yz[state.hospitalData.length]=action.payload;
        return{
          ...state,
          hospitalData:yz
        }
    case 'DELETE-APPOINTMENT':         
           let kd=state.hospitalData.filter((curEle)=>curEle.id!==action.payload);
          return{
            ...state,
            hospitalData:kd
          }  
    default:
      return state;
  }
};

export default drReducer;
