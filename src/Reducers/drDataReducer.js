
const drAllData = {
  drData: "",
  specification: "",
  all: "",
  patientName: "",
  allPatientName: "",
  addCalendarData:[],
  todayAppointment:'',
  totalAppointment:'',
  preferenceData:''
};
const drDataReducer = (state = drAllData, action) => {

  switch (action.type) {
    case "SET-DRDATA":
      return {
        ...state,
        drData: action.payload.doctorsData,
        all: action.payload.doctorsData,
        patientName: action.payload.patientsData,
        allPatientName: action.payload.patientsData,
      };
    case "SET-SPECTFICATION":
      const speci = [
        ...new Set(state.all.map((curEle) => curEle.Specialization)),
      ];
      return {
        ...state,
        specification: speci,
      };
    case "FILTER-DR":
      let y = "";
      const x = state.all.filter(
        (curEle) => curEle.Specialization === action.payload
      );
      if (action.payload) {
        y = x;
      } else if(action.payload===null||action.payload===' ') {
        y = state.all;
        // console.log('state.all',state.all);
      }
      // console.log('y',y)
      return {
        ...state,
        drData: y,
      };
    case "SEARCH-PATIENT":
      let text = action.payload;
      let pList='';
      // console.log('state.patientName',state.patientName)
      let filterList=state.allPatientName.filter((curEle)=>curEle.Name.toLowerCase().includes(text.toLowerCase()))
      if(text){
        pList=filterList
      }else {
        pList=state.allPatientName
      }
      // console.log('filterList',filterList)
      return {
        ...state,
        patientName: pList,
      };
    case 'DELETE-PATIENT-DATA':
      return{
        ...state,
        patientName:state.patientName.filter((curEle)=>curEle.Id!==action.payload)
      }
    case 'UPDATE-PATIENT':
      let z=state.patientName;
      let s=action.payload.Id-1;
      console.log('ssss',action.payload)
      z[s]=action.payload
      console.log('zzzz',z)
      return{
        ...state,
        patientName:z
      }
    case 'TODAY-APPOINMENT':
      return{
        ...state,
        todayAppointment:action.payload
      }
    case 'TOTAL-APPOINMENT':
      console.log('asd',action.payload)
      return{
        ...state,
        totalAppointment:action.payload.length
      }
    case 'PREFERENCE-DATA':
      return{
        ...state,
        preferenceData:action.payload
      }
    default:
      return state;
  }
};

export default drDataReducer;
