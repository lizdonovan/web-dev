import profile from '../data/profile.json';

const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case 'save-profile':
            return[action.profile];
        default:
            return profile;
    }
};

export default profileReducer;