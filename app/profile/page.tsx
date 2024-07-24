import AddressInfo from './components/addressInfo/AddressInfo';
import JobInfo from './components/jobInfo/JobInfo';
import PersonalInfo from './components/personalInfo/PersonalInfo';

const Profile = () => {
  return (
    <>
      <h1 className="text-lg font-semibold md:text-2xl">Profile</h1>
      <PersonalInfo />
      <AddressInfo />
      <JobInfo />
    </>
  );
};

export default Profile;
