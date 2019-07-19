import { observable, action } from "mobx";

class MainStore {
    @observable showLogin = true

    @observable showHome = true

    @observable showUser = false

    @observable showPerson = false

    @observable showAdd = false


    @observable user = {
        name: 'Nicat',
        surname: 'Quliyev',
        sharedDate: '4 gun once',
        sportArea: 'Futbolcu',
        gender: 'Erkek',
        club: 'Sabail',
        city: 'Istanbul',
        mevki: 'Orta Saha',
        birthDay : 2004,
        height: 168,
        weight: 60,
        usedLeg: 'Sag',
        leauge: 'Azerbeycan',
        isPremium: false,
    }

    @observable clickedUser = {
        name: 'Nicat',
        surname: 'Quliyev',
        sharedDate: '4 gun once',
        sportArea: 'Futbolcu',
        gender: 'Erkek',
        club: 'Sabail',
        city: 'Istanbul',
        mevki: 'Orta Saha',
        birthDay : 2004,
        height: 168,
        weight: 60,
        usedLeg: 'Sag',
        leauge: 'Azerbeycan',
        isPremium: false
    }

    @observable videoList = [
        {
            name : "Nicat",
            sharedDate: " 4 gun once",
            videoUrl: "./../static/video.mp4",
            videoText: "12 numara orta acan benim",
            profilPhoto: './../static/yetenegimLogo.jpeg',
            commands: [
                {
                    name: "Ufuk",
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                },
                {
                    name: "Ufuk",
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                }
            ]
        },
        {
            name : "Nicat",
            sharedDate: " 4 gun once",
            videoUrl: "./../static/video.mp4",
            videoText: "12 numara orta acan benim",
            profilPhoto: './../static/yetenegimLogo.jpeg',
            commands: [
                {
                    name: "Ufuk",
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                },
                {
                    name: "Ufuk",
                    id: 1,
                    commandDate: "4 saat once", 
                    commandText: "Sok guzel bir videoo kaardooog"
                }
            ]
        }
    ]

    @observable mainUser = {
        name: 'Nicat',
        surname: 'Quliyev',
        sharedDate: '4 gun once',
        sportArea: 'Futbolcu',
        gender: 'Erkek',
        club: 'Sabail',
        city: 'Istanbul',
        mevki: 'Orta Saha',
        birthDay : 2004,
        height: 168,
        weight: 60,
        usedLeg: 'Sag',
        leauge: 'Azerbeycan'
    }

    @action toggleShowHome = () => {
        this.showHome = !this.showHome
        this.showUser = false 
        this.showPerson =false
        this.showAdd = false
    }
    @action toggleShowUser = () => {
        this.showUser = !this.showUser
        this.showAdd = false 
        this.showHome =false
        this.showPerson = false
    }
    @action toggleShowAdd = () => {
        this.showAdd = true
        this.showUser = false 
        this.showHome =false
        this.showPerson = false
    }
    @action toggleShowPerson = () => {
        this.showPerson = !this.showPerson
        this.showUser = false 
        this.showHome =false
        this.showAdd = false
    }
}

const store = new MainStore()

export default store;