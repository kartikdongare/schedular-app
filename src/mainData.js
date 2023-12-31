export const viewsData = ['Day', 'Week', 'Month'];

export const doctorsData = [
    {
        Name: 'Nembo Lukeni',
        Gender: 'Male',
        Text: 'NemboLukni',
        Id: 1,
        DepartmentId: 1,
        Color: '#ea7a57',
        Education: 'MBBS, DMRD',
        Specialization: 'generalmedicine',
        Experience: '10+ years',
        Designation: 'Senior Specialist',
        DutyTiming: 'Shift1',
        Email: 'nembo36@sample.com',
        Mobile: '(206) 555-9482',
        Availability: 'busy',
        StartHour: '08:00',
        EndHour: '17:00',
        DrProfile:'https://www.kauveryhospital.com/doctorimage/recent/Dr.Boopathi-Rajan2022-09-29-06:51:17am.jpg',
        AvailableDays: [0, 2, 3, 4, 5],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 1, 8, 0),
                WorkEndHour: new Date(2020, 7, 1, 17, 0),
                BreakStartHour: new Date(2020, 7, 1, 12, 0),
                BreakEndHour: new Date(2020, 7, 1, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 2, 8, 0),
                WorkEndHour: new Date(2020, 7, 2, 17, 0),
                BreakStartHour: new Date(2020, 7, 2, 12, 0),
                BreakEndHour: new Date(2020, 7, 2, 13, 0),
                State: 'TimeOff',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 3, 8, 0),
                WorkEndHour: new Date(2020, 7, 3, 17, 0),
                BreakStartHour: new Date(2020, 7, 3, 12, 0),
                BreakEndHour: new Date(2020, 7, 3, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 4, 8, 0),
                WorkEndHour: new Date(2020, 7, 4, 17, 0),
                BreakStartHour: new Date(2020, 7, 4, 12, 0),
                BreakEndHour: new Date(2020, 7, 4, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 5, 8, 0),
                WorkEndHour: new Date(2020, 7, 5, 17, 0),
                BreakStartHour: new Date(2020, 7, 5, 12, 0),
                BreakEndHour: new Date(2020, 7, 5, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 6, 8, 0),
                WorkEndHour: new Date(2020, 7, 6, 17, 0),
                BreakStartHour: new Date(2020, 7, 6, 12, 0),
                BreakEndHour: new Date(2020, 7, 6, 13, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 7, 8, 0),
                WorkEndHour: new Date(2020, 7, 7, 17, 0),
                BreakStartHour: new Date(2020, 7, 7, 12, 0),
                BreakEndHour: new Date(2020, 7, 7, 13, 0),
                State: 'TimeOff'
            }
        ]
    },
    {
        Name: 'Mollie Cobb',
        Gender: 'Female',
        Text: 'MollieCobb',
        Id: 2,
        DepartmentId: 2,
        Color: '#7fa900',
        Education: 'MBBS, MD PAEDIATRICS, DM NEUROLOGY',
        Specialization: 'neurology',
        Experience: '2+ years',
        Designation: 'Junior Specialist',
        Email: 'mollie65@rpy.com',
        DutyTiming: 'Shift2',
        Mobile: '(206) 555-3412',
        Availability: 'available',
        StartHour: '10:00',
        EndHour: '19:00',
        DrProfile:'https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg',
        AvailableDays: [0, 1, 2, 3, 4],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 1, 10, 0),
                WorkEndHour: new Date(2020, 7, 1, 19, 0),
                BreakStartHour: new Date(2020, 7, 1, 14, 0),
                BreakEndHour: new Date(2020, 7, 1, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 2, 10, 0),
                WorkEndHour: new Date(2020, 7, 2, 19, 0),
                BreakStartHour: new Date(2020, 7, 2, 14, 0),
                BreakEndHour: new Date(2020, 7, 2, 15, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 3, 10, 0),
                WorkEndHour: new Date(2020, 7, 3, 19, 0),
                BreakStartHour: new Date(2020, 7, 3, 14, 0),
                BreakEndHour: new Date(2020, 7, 3, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 4, 10, 0),
                WorkEndHour: new Date(2020, 7, 4, 19, 0),
                BreakStartHour: new Date(2020, 7, 4, 14, 0),
                BreakEndHour: new Date(2020, 7, 4, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 5, 10, 0),
                WorkEndHour: new Date(2020, 7, 5, 19, 0),
                BreakStartHour: new Date(2020, 7, 5, 14, 0),
                BreakEndHour: new Date(2020, 7, 5, 15, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 6, 10, 0),
                WorkEndHour: new Date(2020, 7, 6, 19, 0),
                BreakStartHour: new Date(2020, 7, 6, 14, 0),
                BreakEndHour: new Date(2020, 7, 6, 15, 0),
                State: 'TimeOff',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 7, 10, 0),
                WorkEndHour: new Date(2020, 7, 7, 19, 0),
                BreakStartHour: new Date(2020, 7, 7, 14, 0),
                BreakEndHour: new Date(2020, 7, 7, 15, 0),
                State: 'TimeOff'
            }
        ]
    },
    {
        Name: 'Yara Barros',
        Gender: 'Female',
        Text: 'YaraBarros',
        Id: 3,
        DepartmentId: 1,
        Color: '#fec200',
        Education: 'MBBS, DNB (FAMILY MEDICINE)',
        Specialization: 'generalmedicine',
        Experience: '8+ years',
        Designation: 'Senior Specialist',
        DutyTiming: 'Shift3',
        Email: 'yara105@sample.com',
        Mobile: '(206) 555-8122',
        Availability: 'away',
        StartHour: '12:00',
        EndHour: '21:00',
        DrProfile:'https://www.sparshhospital.com/uploads/doctors_photo/Dr__Abhishek_Bansal_391x507.jpg',
        AvailableDays: [1, 2, 3, 4, 5],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 1, 12, 0),
                WorkEndHour: new Date(2020, 7, 1, 21, 0),
                BreakStartHour: new Date(2020, 7, 1, 16, 0),
                BreakEndHour: new Date(2020, 7, 1, 17, 0),
                State: 'TimeOff',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 2, 12, 0),
                WorkEndHour: new Date(2020, 7, 2, 21, 0),
                BreakStartHour: new Date(2020, 7, 2, 16, 0),
                BreakEndHour: new Date(2020, 7, 2, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 3, 12, 0),
                WorkEndHour: new Date(2020, 7, 3, 21, 0),
                BreakStartHour: new Date(2020, 7, 3, 16, 0),
                BreakEndHour: new Date(2020, 7, 3, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 4, 12, 0),
                WorkEndHour: new Date(2020, 7, 4, 21, 0),
                BreakStartHour: new Date(2020, 7, 4, 16, 0),
                BreakEndHour: new Date(2020, 7, 4, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 5, 12, 0),
                WorkEndHour: new Date(2020, 7, 5, 21, 0),
                BreakStartHour: new Date(2020, 7, 5, 16, 0),
                BreakEndHour: new Date(2020, 7, 5, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 6, 12, 0),
                WorkEndHour: new Date(2020, 7, 6, 21, 0),
                BreakStartHour: new Date(2020, 7, 6, 16, 0),
                BreakEndHour: new Date(2020, 7, 6, 17, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 7, 12, 0),
                WorkEndHour: new Date(2020, 7, 7, 21, 0),
                BreakStartHour: new Date(2020, 7, 7, 16, 0),
                BreakEndHour: new Date(2020, 7, 7, 17, 0),
                State: 'TimeOff'
            }
        ]
    },
    {
        Name: 'Paul Walker',
        Gender: 'Male',
        Text: 'PaulWalker',
        Id: 4,
        DepartmentId: 3,
        Color: '#865fcf',
        Education: 'MBBS, MD (Dermatology)',
        Designation: 'Senior Dermatologist',
        Specialization: 'dermatology',
        Experience: '10+ years',
        DutyTiming: 'Shift1',
        Email: 'paul39@mail.com',
        Mobile: '(717) 555-4848',
        Availability: 'busy',
        StartHour: '08:00',
        EndHour: '17:00',
        DrProfile:'https://www.wockhardthospitals.com/wp-content/uploads/2019/11/Dr.-Imran-683x1024.jpg',
        AvailableDays: [2, 3, 4, 5, 6],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 1, 8, 0),
                WorkEndHour: new Date(2020, 7, 1, 17, 0),
                BreakStartHour: new Date(2020, 7, 1, 12, 0),
                BreakEndHour: new Date(2020, 7, 1, 13, 0),
                State: 'TimeOff',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 2, 8, 0),
                WorkEndHour: new Date(2020, 7, 2, 17, 0),
                BreakStartHour: new Date(2020, 7, 2, 12, 0),
                BreakEndHour: new Date(2020, 7, 2, 13, 0),
                State: 'TimeOff',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 3, 8, 0),
                WorkEndHour: new Date(2020, 7, 3, 17, 0),
                BreakStartHour: new Date(2020, 7, 3, 12, 0),
                BreakEndHour: new Date(2020, 7, 3, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 4, 8, 0),
                WorkEndHour: new Date(2020, 7, 4, 17, 0),
                BreakStartHour: new Date(2020, 7, 4, 12, 0),
                BreakEndHour: new Date(2020, 7, 4, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 5, 8, 0),
                WorkEndHour: new Date(2020, 7, 5, 17, 0),
                BreakStartHour: new Date(2020, 7, 5, 12, 0),
                BreakEndHour: new Date(2020, 7, 5, 13, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 6, 8, 0),
                WorkEndHour: new Date(2020, 7, 6, 17, 0),
                BreakStartHour: new Date(2020, 7, 6, 12, 0),
                BreakEndHour: new Date(2020, 7, 6, 13, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 7, 8, 0),
                WorkEndHour: new Date(2020, 7, 7, 17, 0),
                BreakStartHour: new Date(2020, 7, 7, 12, 0),
                BreakEndHour: new Date(2020, 7, 7, 13, 0),
                State: 'AddBreak'
            }
        ]
    },
    {
        Name: 'Amelia Edwards',
        Gender: 'Female',
        Text: 'AmeliaEdwards',
        Id: 5,
        DepartmentId: 4,
        Color: '#1aaa55',
        Education: 'MBBS, MD',
        Designation: 'Senior Orthopedics',
        Specialization: 'orthopedics',
        Experience: '10+ years',
        DutyTiming: 'Shift2',
        Email: 'amelia101@rpy.com',
        Mobile: '(717) 555-7773',
        Availability: 'available',
        StartHour: '10:00',
        EndHour: '19:00',
        DrProfile:'https://www.kauveryhospital.com/doctorimage/recent/Dr.Muthulakshmi2022-02-09-01:18:39pm.jpg',
        AvailableDays: [0, 2, 3, 4, 5],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 1, 10, 0),
                WorkEndHour: new Date(2020, 7, 1, 19, 0),
                BreakStartHour: new Date(2020, 7, 1, 14, 0),
                BreakEndHour: new Date(2020, 7, 1, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 2, 10, 0),
                WorkEndHour: new Date(2020, 7, 2, 19, 0),
                BreakStartHour: new Date(2020, 7, 2, 14, 0),
                BreakEndHour: new Date(2020, 7, 2, 15, 0),
                State: 'TimeOff',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 3, 10, 0),
                WorkEndHour: new Date(2020, 7, 3, 19, 0),
                BreakStartHour: new Date(2020, 7, 3, 14, 0),
                BreakEndHour: new Date(2020, 7, 3, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 4, 10, 0),
                WorkEndHour: new Date(2020, 7, 4, 19, 0),
                BreakStartHour: new Date(2020, 7, 4, 14, 0),
                BreakEndHour: new Date(2020, 7, 4, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 5, 10, 0),
                WorkEndHour: new Date(2020, 7, 5, 19, 0),
                BreakStartHour: new Date(2020, 7, 5, 14, 0),
                BreakEndHour: new Date(2020, 7, 5, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 6, 10, 0),
                WorkEndHour: new Date(2020, 7, 6, 19, 0),
                BreakStartHour: new Date(2020, 7, 6, 14, 0),
                BreakEndHour: new Date(2020, 7, 6, 15, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 7, 10, 0),
                WorkEndHour: new Date(2020, 7, 7, 19, 0),
                BreakStartHour: new Date(2020, 7, 7, 14, 0),
                BreakEndHour: new Date(2020, 7, 7, 15, 0),
                State: 'TimeOff'
            }
        ]
    },
    {
        Name: 'Alexa Richardson',
        Gender: 'Female',
        Text: 'AlexaRichardson',
        Id: 6,
        DepartmentId: 5,
        Color: '#df5286',
        Education: 'MD, DM, FACC, FICC',
        Designation: 'Practitioner',
        Specialization: 'diabetology',
        Experience: '1+ years',
        DutyTiming: 'Shift2',
        Email: 'alexa55@sample.com',
        Mobile: '(717) 555-5598',
        Availability: 'busy',
        StartHour: '10:00',
        EndHour: '19:00',
        DrProfile:'https://max-website20-images.s3.ap-south-1.amazonaws.com/Dr_Puneet_sq_3be6907e0c.jpg',
        AvailableDays: [2, 3, 4, 5, 6],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 1, 10, 0),
                WorkEndHour: new Date(2020, 7, 1, 19, 0),
                BreakStartHour: new Date(2020, 7, 1, 14, 0),
                BreakEndHour: new Date(2020, 7, 1, 15, 0),
                State: 'TimeOff',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 2, 10, 0),
                WorkEndHour: new Date(2020, 7, 2, 19, 0),
                BreakStartHour: new Date(2020, 7, 2, 14, 0),
                BreakEndHour: new Date(2020, 7, 2, 15, 0),
                State: 'TimeOff',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 3, 10, 0),
                WorkEndHour: new Date(2020, 7, 3, 19, 0),
                BreakStartHour: new Date(2020, 7, 3, 14, 0),
                BreakEndHour: new Date(2020, 7, 3, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 4, 10, 0),
                WorkEndHour: new Date(2020, 7, 4, 19, 0),
                BreakStartHour: new Date(2020, 7, 4, 14, 0),
                BreakEndHour: new Date(2020, 7, 4, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 5, 10, 0),
                WorkEndHour: new Date(2020, 7, 5, 19, 0),
                BreakStartHour: new Date(2020, 7, 5, 14, 0),
                BreakEndHour: new Date(2020, 7, 5, 15, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 6, 10, 0),
                WorkEndHour: new Date(2020, 7, 6, 19, 0),
                BreakStartHour: new Date(2020, 7, 6, 14, 0),
                BreakEndHour: new Date(2020, 7, 6, 15, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 7, 10, 0),
                WorkEndHour: new Date(2020, 7, 7, 19, 0),
                BreakStartHour: new Date(2020, 7, 7, 14, 0),
                BreakEndHour: new Date(2020, 7, 7, 15, 0),
                State: 'AddBreak'
            }
        ]
    },
    {
        Name: 'Nout Golstein',
        Gender: 'Male',
        Text: 'NoutGolstein',
        Id: 7,
        DepartmentId: 6,
        Color: '#00bdae',
        Education: 'MS',
        Designation: 'Junior Cardiologist',
        Specialization: 'cardiology',
        Experience: '2+ years',
        DutyTiming: 'Shift3',
        Email: 'nout49@rpy.com',
        Mobile: '(206) 555-1189',
        Availability: 'busy',
        StartHour: '12:00',
        EndHour: '21:00',
        DrProfile:'https://img.freepik.com/free-photo/attractive-young-male-nutriologist-lab-coat-smiling-against-white-background_662251-2960.jpg',
        AvailableDays: [0, 3, 4, 5, 6],
        WorkDays: [
            {
                Day: 'sunday',
                Index: 0,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 1, 12, 0),
                WorkEndHour: new Date(2020, 7, 1, 21, 0),
                BreakStartHour: new Date(2020, 7, 1, 16, 0),
                BreakEndHour: new Date(2020, 7, 1, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'monday',
                Index: 1,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 2, 12, 0),
                WorkEndHour: new Date(2020, 7, 2, 21, 0),
                BreakStartHour: new Date(2020, 7, 2, 16, 0),
                BreakEndHour: new Date(2020, 7, 2, 17, 0),
                State: 'TimeOff',
            },
            {
                Day: 'tuesday',
                Index: 2,
                Enable: false,
                WorkStartHour: new Date(2020, 7, 3, 12, 0),
                WorkEndHour: new Date(2020, 7, 3, 21, 0),
                BreakStartHour: new Date(2020, 7, 3, 16, 0),
                BreakEndHour: new Date(2020, 7, 3, 17, 0),
                State: 'TimeOff',
            },
            {
                Day: 'wednesday',
                Index: 3,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 4, 12, 0),
                WorkEndHour: new Date(2020, 7, 4, 21, 0),
                BreakStartHour: new Date(2020, 7, 4, 16, 0),
                BreakEndHour: new Date(2020, 7, 4, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'thursday',
                Index: 4,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 5, 12, 0),
                WorkEndHour: new Date(2020, 7, 5, 21, 0),
                BreakStartHour: new Date(2020, 7, 5, 16, 0),
                BreakEndHour: new Date(2020, 7, 5, 17, 0),
                State: 'AddBreak',
            },
            {
                Day: 'friday',
                Index: 5,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 6, 12, 0),
                WorkEndHour: new Date(2020, 7, 6, 21, 0),
                BreakStartHour: new Date(2020, 7, 6, 16, 0),
                BreakEndHour: new Date(2020, 7, 6, 17, 0),
                State: 'RemoveBreak',
            },
            {
                Day: 'saturday',
                Index: 6,
                Enable: true,
                WorkStartHour: new Date(2020, 7, 7, 12, 0),
                WorkEndHour: new Date(2020, 7, 7, 21, 0),
                BreakStartHour: new Date(2020, 7, 7, 16, 0),
                BreakEndHour: new Date(2020, 7, 7, 17, 0),
                State: 'AddBreak'
            }
        ]
    }
];

export const patientsData = [
    {
        Id: 1,
        Name: 'Laura',
        Text: 'Laura',
        DOB: new Date(1980, 8, 3),
        Mobile: '(717) 555-4444',
        Email: 'laura90@mail.com',
        Address: '507 - 20th Ave. E.\r\nApt. 2A',
        Disease: 'Eye Checkup',
        DepartmentName: 'GENERAL',
        BloodGroup: 'O+',
        Gender: 'Female',
        Symptoms: 'Sweating, Chills and Shivering'
    },
    {
        Id: 2,
        Name: 'Milka',
        Text: 'Milka',
        DOB: new Date(2000, 3, 5),
        Mobile: '(717) 555-4445',
        Email: 'milka40@sample.com',
        Address: '908 W. Capital Way',
        Disease: 'Bone Fracture',
        DepartmentName: 'ORTHOPEDICS',
        BloodGroup: 'AB+',
        Gender: 'Female',
        Symptoms: 'Swelling or bruising over a bone, Pain in the injured area',
    },
    {
        Id: 3,
        Name: 'Adams',
        Text: 'Adams',
        DOB: new Date(1985, 2, 3),
        Mobile: '(717) 555-4454',
        Email: 'adams89@rpy.com',
        Address: '722 Moss Bay Blvd.',
        Disease: 'Eye and Spectactles',
        DepartmentName: 'GENERAL',
        BloodGroup: 'B+',
        Gender: 'Male',
        Symptoms: 'Frequent squinting, Eye fatigue or strain',
    },
    {
        Id: 4,
        Name: 'Janet',
        Text: 'Janet',
        DOB: new Date(2000, 7, 3),
        Mobile: '(717) 555-4544',
        Email: 'janet79@rpy.com',
        Address: '4110 Old Redmond Rd.',
        Disease: 'Biological Problem',
        DepartmentName: 'GENERAL',
        BloodGroup: 'B+',
        Gender: 'Male',
        Symptoms: 'Physical aches or pain, Memory difficulties or personality change',
    },
    {
        Id: 5,
        Name: 'Mercy',
        Text: 'Mercy',
        DOB: new Date(2005, 4, 29),
        Mobile: '(717) 555-5444',
        Email: 'mercy60@sample.com',
        Address: '14 Garrett Hill',
        Disease: 'Skin Hives',
        DepartmentName: 'DERMATOLOGY',
        BloodGroup: 'AB-',
        Gender: 'Female',
        Symptoms: 'Outbreak of swollen, pale red bumps or plaques'
    },
    {
        Id: 6,
        Name: 'Richa',
        Text: 'Richa',
        DOB: new Date(1989, 10, 29),
        Mobile: '(206) 555-4444',
        Email: 'richa46@mail.com',
        Address: 'Coventry House\r\nMiner Rd.',
        Disease: 'Arm Fracture',
        DepartmentName: 'ORTHOPEDICS',
        BloodGroup: 'B+',
        Gender: 'Female',
        Symptoms: 'Swelling, warmth, or redness in the joint',
    },
    {
        Id: 7,
        Name: 'Maud Oliver',
        Text: 'MaudOliver',
        DOB: new Date(1989, 10, 29),
        Mobile: '(206) 666-4444',
        Email: 'moud46@rpy.com',
        Address: 'Coventry House\r\nMiner Rd.',
        Disease: 'Racing heartbeat',
        DepartmentName: 'CARDIOLOGY',
        BloodGroup: 'B+',
        Gender: 'Male',
        Symptoms: 'A fluttering in your chest',
    }
];

export const waitingList= [
    {
        Id: 1,
        Name: 'Laura',
        start: new Date(2020, 7, 3, 8, 30),
        end: new Date(2020, 7, 3, 9, 30),
        Disease: 'Sudden loss of vision',
        DepartmentName: 'GENERAL',
        Treatment: 'CHECKUP',
        DepartmentId: 1,
        PatientId: 1
    }, {
        Id: 2,
        Name: 'Milka',
        start: new Date(2020, 7, 4, 8, 30),
        end: new Date(2020, 7, 4, 10, 30),
        Disease: 'Bone Fracture',
        DepartmentName: 'ORTHOPEDICS',
        Treatment: 'SURGERY',
        DepartmentId: 4,
        PatientId: 2
    }, {
        Id: 3,
        Name: 'Adams',
        start: new Date(2020, 7, 4, 9, 30),
        end: new Date(2020, 7, 4, 10, 30),
        Disease: 'Skin Hives',
        DepartmentName: 'DERMATOLOGY',
        Treatment: 'CHECKUP',
        DepartmentId: 3,
        PatientId: 3
    }, {
        Id: 4,
        Name: 'Janet',
        start: new Date(2020, 7, 3, 11, 0),
        end: new Date(2020, 7, 3, 12, 30),
        Disease: 'Frequent urination',
        DepartmentName: 'DIABETALOGY',
        Treatment: 'DIALOGIS',
        DepartmentId: 5,
        PatientId: 4
    }, {
        Id: 5,
        Name: 'Mercy',
        start: new Date(2020, 7, 3, 11, 0),
        end: new Date(2020, 7, 3, 12, 30),
        Disease: 'Muscle weakness',
        DepartmentName: 'NEUROLOGY',
        Treatment: 'DIAGNOSIS',
        DepartmentId: 2,
        PatientId: 5,
    }, {
        Id: 6,
        Name: 'Richa',
        start: new Date(2020, 7, 3, 11, 0),
        end: new Date(2020, 7, 3, 12, 30),
        Disease: 'Shortness of breath',
        DepartmentName: 'CARDIOLOGY',
        Treatment: 'REGULAR CHECKUP',
        DepartmentId: 6,
        PatientId: 6
    }, {
        Id: 7,
        Name: 'Richa',
        start: new Date(2020, 7, 3, 8, 30),
        end: new Date(2020, 7, 3, 9, 30),
        Disease: 'Sudden loss of vision',
        DepartmentName: 'GENERAL',
        Treatment: 'CHECKUP',
        DepartmentId: 1,
        PatientId: 6
    }, {
        Id: 8,
        Name: 'Mercy',
        start: new Date(2020, 8, 4, 8, 30),
        end: new Date(2020, 8, 4, 10, 30),
        Disease: 'Bone Fracture',
        DepartmentName: 'ORTHOPEDICS',
        Treatment: 'SURGERY',
        DepartmentId: 4,
        PatientId: 5,
    }, {
        Id: 9,
        Name: 'Janet',
        start: new Date(2020, 7, 4, 9, 30),
        end: new Date(2020, 7, 4, 10, 30),
        Disease: 'Skin Hives',
        DepartmentName: 'DERMATOLOGY',
        Treatment: 'CHECKUP',
        DepartmentId: 3,
        PatientId: 4
    },
];

export const hospitalData = [
    {
        id: 1000,
        title: 'Milka',
        start: new Date(),
        end: new Date(),
        consultation:'Nembo Lukeni',
        department: 'ORTHOPEDICS',
        location:'abc',
        Symptoms: 'Swelling or bruising over a bone, Pain in the injured area'
    }, {
        id: 1001,
        title: 'Janet',
        start: new Date(),
        end: new Date(),
        department: 'GENERAL',
        location:'zyc',
        consultation:'Yara Barros',
        Symptoms: 'Physical aches or pain, Memory difficulties or personality changes'
    }, {
        id: 1002,
        title: 'Mercy',
        department: 'DERMATOLOGY',
        start: new Date(),
        end: new Date(),
        location:'abc',
        consultation:'Yara Barros',
        Symptoms: 'outbreak of swollen, pale red bumps or plaques'
    }, {
        id: 1003,
        title: 'Laura',
        
        department: 'DIABETOLOGY',
       
        start: new Date(2023, 6, 9, 10, 0),
        end: new Date(2023, 6, 9, 11, 0),
        location:'abc',
        consultation:'Yara Barros',
        Symptoms: 'Urinating often, Extreme fatigue, Blurry vision'
    }, {
        id: 1004,
        title: 'Richa',
      
        department: 'DERMATOLOGIST',
        
        start: new Date(2023, 6, 7, 10, 0),
        end: new Date(2023, 6, 7, 11, 0),
        location:'abc',
        consultation:'Yara Barros',
        Symptoms: 'Scaly or rough skin, Peeling skin, open sores or lesions'
    }, {
        id: 1005,
        title: 'Adams',
        department: 'GENERAL',
        start: new Date(2023, 6, 21, 13, 30),
        end: new Date(2023, 6, 21, 14, 0),
        location:'abc',
        consultation:'Yara Barros',
        Symptoms: 'Decreased energy, Chronic fatigue, Difficulty concentrating'
    }, {
        id: 1006,
        title: 'Richa',
        
        department: 'ORTHOPEDICS',
        
        start: new Date(2023, 6, 22, 16, 0),
        end: new Date(2023, 6, 22, 17, 0),
        location:'abc',
        consultation:'Yara Barros',
        Symptoms: 'Swelling, warmth, or redness in the joint'
    }, {
        id: 1007,
        title: 'Adams',
        department: 'CARDIOLOGY',
        start: new Date(2023, 6, 25, 11, 0),
        end: new Date(2023, 7, 25, 11, 30),
        location:'abc',
        consultation:'Yara Barros',
        Symptoms: 'Shortness of breath, Swollen feet or ankles'
     }, 
    //{
    //     Id: 1008,
    //     Name: 'Milka',
    //     Disease: 'Skin Care Treatment',
    //     DepartmentName: 'DERMATOLOGIST',
    //     DepartmentId: 3,
    //     start: new Date(2020, 7, 13, 9, 0),
    //     end: new Date(2020, 7, 13, 10, 0),
    //     DoctorId: 4,
    //     PatientId: 2,
    //     Symptoms: 'a rash, which might be painful or itchy'
    // }, {
    //     Id: 1009,
    //     Name: 'Adams',
    //     Disease: 'Surgery Treatment',
    //     DepartmentName: 'GENERAL',
    //     DepartmentId: 1,
    //     start: new Date(2020, 7, 10, 14, 0),
    //     end: new Date(2020, 7, 10, 16, 0),
    //     DoctorId: 1,
    //     PatientId: 3,
    //     Symptoms: 'Pain at Site, Swelling/Hardening'
    // }, {
    //     Id: 1010,
    //     Name: 'Adams',
    //     Disease: 'Bone Problem',
    //     DepartmentName: 'ORTHOPEDICS',
    //     DepartmentId: 4,
    //     start: new Date(2020, 7, 11, 11, 0),
    //     end: new Date(2020, 7, 11, 13, 0),
    //     DoctorId: 5,
    //     PatientId: 3,
    //     Symptoms: 'Recurring or constant joint pain or tenderness'
    // }, {
    //     Id: 1011,
    //     Name: 'Adams',
    //     Disease: 'General Checkup',
    //     DepartmentName: 'GENERAL',
    //     DepartmentId: 1,
    //     start: new Date(2020, 7, 1, 11, 0),
    //     end: new Date(2020, 7, 1, 12, 0),
    //     DoctorId: 1,
    //     PatientId: 3,
    //     Symptoms: 'a pulsating feeling in the head, sensitivity to sound and light'
    // }, {
    //     Id: 1012,
    //     Name: 'Janet',
    //     Disease: 'Complete loss of sensation',
    //     DepartmentName: 'NEUROLOGY',
    //     DepartmentId: 2,
    //     start: new Date(2020, 7, 1, 16, 30),
    //     end: new Date(2020, 7, 1, 17, 30),
    //     DoctorId: 2,
    //     PatientId: 4,
    //     Symptoms: 'Partial or complete paralysis, Muscle weakness'
    // }, {
    //     Id: 1013,
    //     Name: 'Laura',
    //     start: new Date(2020, 7, 5, 13, 0),
    //     end: new Date(2020, 7, 5, 14, 0),
    //     Disease: 'Health Checkup',
    //     DepartmentName: 'GENERAL',
    //     DepartmentId: 1,
    //     DoctorId: 1,
    //     PatientId: 1,
    //     Symptoms: 'Sweating, Chills and Shivering'
    // }, {
    //     Id: 1014,
    //     Name: 'Adams',
    //     start: new Date(2020, 7, 5, 16, 0),
    //     end: new Date(2020, 7, 5, 17, 0),
    //     Disease: 'Eye and Spectacles Checkup',
    //     DepartmentName: 'GENERAL',
    //     DepartmentId: 1,
    //     DoctorId: 3,
    //     PatientId: 3,
    //     Symptoms: 'Frequent squinting, Eye fatigue or strain'
    // }, {
    //     id: 1015,
    //     title: 'Milka',
    //     DepartmentName: 'DIABETOLOGY',
   
    //     start: new Date(2020, 7, 6, 12, 0),
    //     end: new Date(2020, 7, 6, 13, 0),
    //     Symptoms: 'Urinating often, Extreme fatigue, Blurry vision'
    // }, 
    //{
    //     Id: 1016,
    //     Name: 'Adams',
    //     Disease: 'Kidney disease',
    //     DepartmentName: 'DIABETOLOGY',
    //     DepartmentId: 5,
    //     start: new Date(2020, 7, 6, 18, 0),
    //     end: new Date(2020, 7, 6, 18, 30),
    //     DoctorId: 6,
    //     PatientId: 3,
    //     Symptoms: 'Decreased urine output'
    // }, {
    //     Id: 1017,
    //     Name: 'Janet',
    //     Disease: 'Gastroparesis',
    //     DepartmentName: 'DIABETOLOGY',
    //     DepartmentId: 5,
    //     start: new Date(2020, 7, 4, 14, 0),
    //     end: new Date(2020, 7, 4, 14, 30),
    //     DoctorId: 6,
    //     PatientId: 4,
    //     Symptoms: 'A feeling of fullness after eating just a few bites'
    // }, {
    //     Id: 1018,
    //     Name: 'Laura',
    //     Disease: 'Sleep apnea',
    //     DepartmentName: 'DIABETOLOGY',
    //     DepartmentId: 5,
    //     start: new Date(2020, 7, 4, 12, 0),
    //     end: new Date(2020, 7, 4, 13, 0),
    //     DoctorId: 6,
    //     PatientId: 1,
    //     Symptoms: 'Gasping for air during sleep'
    // }, {
    //     Id: 1019,
    //     Name: 'Milka',
    //     Disease: 'Vision problems',
    //     DepartmentName: 'DIABETOLOGY',
    //     DepartmentId: 5,
    //     start: new Date(2020, 7, 4, 10, 0),
    //     end: new Date(2020, 7, 4, 11, 0),
    //     DoctorId: 6,
    //     PatientId: 2,
    //     Symptoms: 'Severe, sudden eye pain'
    // }, {
    //     Id: 1020,
    //     Name: 'Milka',
    //     Disease: 'Feeling very hungry - even though you are eating',
    //     DepartmentName: 'DIABETOLOGY',
    //     DepartmentId: 5,
    //     start: new Date(2020, 7, 2, 12, 0),
    //     end: new Date(2020, 7, 2, 13, 0),
    //     DoctorId: 6,
    //     PatientId: 2,
    //     Symptoms: 'Urinating often, Extreme fatigue, Blurry vision'
    //  }, 
     //{
    //     Id: 1021,
    //     Name: 'Adams',
    //     start: new Date(2020, 7, 6, 10, 0),
    //     end: new Date(2020, 7, 6, 11, 0),
    //     Disease: 'Bone Fracture',
    //     DepartmentName: 'ORTHOPEDICS',
    //     DepartmentId: 4,
    //     DoctorId: 5,
    //     PatientId: 3,
    //     Symptoms: 'Swelling or bruising over a bone, Pain in the injured area'
    // }, {
    //     Id: 1022,
    //     Name: 'Mercy',
    //     start: new Date(2020, 7, 2, 15, 0),
    //     end: new Date(2020, 7, 2, 15, 30),
    //     Disease: 'Left Arm Fracture',
    //     DepartmentName: 'ORTHOPEDICS',
    //     DepartmentId: 4,
    //     DoctorId: 5,
    //     PatientId: 5,
    //     Symptoms: 'Deformity, such as a bent arm or wrist'
    // }, {
    //     Id: 1023,
    //     Name: 'Milka',
    //     Disease: 'Rapid heartbeat',
    //     DepartmentName: 'CARDIOLOGY',
    //     DepartmentId: 6,
    //     start: new Date(2020, 7, 6, 14, 0),
    //     end: new Date(2020, 7, 6, 14, 30),
    //     DoctorId: 7,
    //     PatientId: 2,
    //     Symptoms: 'Fluttering sensation in the chest'
    // }, {
    //     Id: 1024,
    //     Name: 'Adams',
    //     Disease: 'Lightheadedness',
    //     DepartmentName: 'CARDIOLOGY',
    //     DepartmentId: 6,
    //     start: new Date(2020, 7, 4, 17, 30),
    //     end: new Date(2020, 7, 4, 18, 30),
    //     DoctorId: 7,
    //     PatientId: 3,
    //     Symptoms: 'Sudden drop in blood pressure'
    // }, {
    //     Id: 1025,
    //     Name: 'Janet',
    //     Disease: 'Shortness of breath',
    //     DepartmentName: 'CARDIOLOGY',
    //     DepartmentId: 6,
    //     start: new Date(2020, 7, 4, 15, 0),
    //     end: new Date(2020, 7, 4, 15, 30),
    //     DoctorId: 7,
    //     PatientId: 4,
    //     Symptoms: 'Nasal congestion, runny nose, itchy or watery eyes'
    // }, {
    //     Id: 1025,
    //     Name: 'Milka',
    //     Disease: 'Chest pain or discomfort',
    //     DepartmentName: 'CARDIOLOGY',
    //     DepartmentId: 6,
    //     start: new Date(2020, 7, 3, 17, 0),
    //     end: new Date(2020, 7, 3, 18, 30),
    //     DoctorId: 7,
    //     PatientId: 2,
    //     Symptoms: 'Fast heart beat, and trouble breathing'
    // }, {
    //     Id: 1026,
    //     Name: 'Milka',
    //     Disease: 'Racing heartbeat',
    //     DepartmentName: 'CARDIOLOGY',
    //     DepartmentId: 6,
    //     start: new Date(2020, 7, 6, 15, 30),
    //     end: new Date(2020, 7, 6, 16, 0),
    //     DoctorId: 7,
    //     PatientId: 2,
    //     Symptoms: 'A fluttering in your chest'
    // }, {
    //     Id: 1027,
    //     Name: 'Milka',
    //     Disease: 'Heart Problem',
    //     DepartmentName: 'CARDIOLOGY',
    //     DepartmentId: 6,
    //     start: new Date(2020, 7, 3, 14, 0),
    //     end: new Date(2020, 7, 3, 14, 30),
    //     DoctorId: 7,
    //     PatientId: 2,
    //     Symptoms: 'Fluid buildup from being overweight'
    // }, {
    //     Id: 1028,
    //     Name: 'Milka',
    //     Disease: 'Dizziness',
    //     DepartmentName: 'DIABETOLOGY',
    //     DepartmentId: 5,
    //     start: new Date(2020, 7, 5, 19, 0),
    //     end: new Date(2020, 7, 5, 19, 30),
    //     DoctorId: 6,
    //     PatientId: 2,
    //     Symptoms: 'Feeling of lightheadedness or nearly fainting'
    // }
];

export const specializationData = [
    { DepartmentId: 1, Id: 'generalmedicine', Text: 'General Medicine', Color: '#F538B2' },
    { DepartmentId: 2, Id: 'neurology', Text: 'Neurology', Color: '#33C7E8' },
    { DepartmentId: 3, Id: 'dermatology', Text: 'Dermatology', Color: '#916DE4' },
    { DepartmentId: 4, Id: 'orthopedics', Text: 'Orthopedics', Color: '#388CF5' },
    { DepartmentId: 5, Id: 'diabetology', Text: 'Diabetology', Color: '#60F238' },
    { DepartmentId: 6, Id: 'cardiology', Text: 'Cardiology', Color: '#F29438' }
];

export const experienceData = [
    { Id: '1+ years', Text: '1+ years' },
    { Id: '2+ years', Text: '2+ years' },
    { Id: '5+ years', Text: '5+ years' },
    { Id: '10+ years', Text: '10+ years' },
    { Id: '15+ years', Text: '15+ years' },
    { Id: '20+ years', Text: '20+ years' }
];

export const dutyTimingsData = [
    { Id: 'Shift1', Text: '08:00 AM - 05:00 PM' },
    { Id: 'Shift2', Text: '10:00 AM - 07:00 PM' },
    { Id: 'Shift3', Text: '12:00 AM - 09:00 PM' }
];

export const activityData = [
    {
        Name: 'Added New Doctor',
        Message: 'Dr.Johnson James, Cardiologist',
        Time: '5 mins ago',
        Type: 'doctor',
        ActivityTime: new Date(2020, 7, 8, 9, 0)
    },
    {
        Name: 'Added New Appointment',
        Message: 'Laura for General Checkup on 7th September, 2020 @ 8.30 AM with Dr.Molli Cobb',
        Time: '5 mins ago',
        Type: 'appointment',
        ActivityTime: new Date(2020, 7, 8, 11, 0)
    },
    {
        Name: 'Added New Patient',
        Message: 'James Richard for Fever and cold',
        Time: '5 mins ago',
        Type: 'patient',
        ActivityTime: new Date(2020, 7, 8, 10, 0)
    },
    {
        Name: 'Added New Appointment',
        Message: 'Joseph for consultation on 7th December, 2020 @ 11.10 AM with Dr.Molli Cobb',
        Time: '5 mins ago',
        Type: 'appointment',
        ActivityTime: new Date(2020, 7, 11, 11, 0)
    }
];

// Preference module data

export const timeSlots = [
    { Value: 10, Text: '10 mins' },
    { Value: 20, Text: '20 mins' },
    { Value: 30, Text: '30 mins' },
    { Value: 60, Text: '60 mins' },
    { Value: 120, Text: '120 mins' }
];

export const startHours = [
    { Value: '08:00', Text: '8:00 AM' },
    { Value: '09:00', Text: '9:00 AM' },
    { Value: '10:00', Text: '10:00 AM' },
    { Value: '11:00', Text: '11:00 AM' },
    { Value: '12:00', Text: '12:00 AM' }
];

export const endHours = [
    { Value: '16:00', Text: '4:00 PM' },
    { Value: '17:00', Text: '5:00 PM' },
    { Value: '18:00', Text: '6:00 PM' },
    { Value: '19:00', Text: '7:00 PM' },
    { Value: '20:00', Text: '8:00 PM' },
    { Value: '21:00', Text: '9:00 PM' }
];

export const views = [
    { Value: 'Day', Text: 'Daily' },
    { Value: 'Week', Text: 'Weekly' },
    { Value: 'Month', Text: 'Monthly' }
];

export const colorCategory = [
    { Value: 'Departments', Text: 'Department Colors' },
    { Value: 'Doctors', Text: 'Doctors Colors' }
];

export const bloodGroupData= [
    { Value: 'AB+', Text: 'AB+' },
    { Value: 'A+', Text: 'A+' },
    { Value: 'B+', Text: 'B+' },
    { Value: 'O+', Text: 'O+' },
    { Value: 'AB-', Text: 'AB-' },
    { Value: 'A-', Text: 'A-' },
    { Value: 'B-', Text: 'B-' },
    { Value: 'O-', Text: 'O-' }
];

export const dayOfWeekList = [
    { Value: 0, Text: 'Sunday' },
    { Value: 1, Text: 'Monday' },
    { Value: 2, Text: 'Tuesday' },
    { Value: 3, Text: 'Wednesday' },
    { Value: 4, Text: 'Thursday' },
    { Value: 5, Text: 'Friday' },
    { Value: 6, Text: 'Saturday' }
];

// shift wise block data
export const shift1BlockData = [
    {
        Id: 50,
        Name: 'Off Work',
        start: new Date(2020, 7, 2, 17, 0),
        end: new Date(2020, 7, 2, 21, 0),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
        IsAllDay: false,
        IsBlock: true,
        DoctorId: [1, 2, 3, 4, 5, 6, 7]
    }
];

export const shift2BlockData = [
    {
        Id: 51,
        Name: 'Off Work',
        start: new Date(2020, 7, 2, 8, 0),
        end: new Date(2020, 7, 2, 10, 0),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
        IsAllDay: false,
        IsBlock: true,
        DoctorId: [1, 2, 3, 4, 5, 6, 7]
    }, {
        Id: 52,
        Name: 'Off Work',
        start: new Date(2020, 7, 2, 19, 0),
        end: new Date(2020, 7, 2, 21, 0),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
        IsAllDay: false,
        IsBlock: true,
        DoctorId: [1, 2, 3, 4, 5, 6, 7]
    },
];

export const shift3BlockData = [
    {
        Id: 53,
        Name: 'Off Work',
        start: new Date(2020, 7, 2, 8, 0),
        end: new Date(2020, 7, 2, 12, 0),
        RecurrenceRule: 'FREQ=DAILY;INTERVAL=1;',
        IsAllDay: false,
        IsBlock: true,
        DoctorId: [1, 2, 3, 4, 5, 6, 7]
    }
];