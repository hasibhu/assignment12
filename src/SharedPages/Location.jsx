// src/UpazilaDropdown.js

import React from 'react';

const upazilas = [
    { district: 'Dhaka', upazilas: ['Dhaka Sadar', 'Dhamrai', 'Dohar', 'Keraniganj', 'Nawabganj', 'Savar'] },
    { district: 'Faridpur', upazilas: ['Faridpur Sadar', 'Alfadanga', 'Bhanga', 'Boalmari', 'Charbhadrasan', 'Madhukhali', 'Nagarkanda', 'Sadarpur', 'Saltha'] },
    { district: 'Gazipur', upazilas: ['Gazipur Sadar', 'Kaliakair', 'Kaliganj', 'Kapasia', 'Sreepur'] },
    { district: 'Gopalganj', upazilas: ['Gopalganj Sadar', 'Kashiani', 'Kotalipara', 'Muksudpur', 'Tungipara'] },
    { district: 'Kishoreganj', upazilas: ['Kishoreganj Sadar', 'Austagram', 'Bajitpur', 'Bhairab', 'Hossainpur', 'Itna', 'Karimganj', 'Katiadi', 'Kuliarchar', 'Mithamain', 'Nikli', 'Pakundia', 'Tarail'] },
    { district: 'Madaripur', upazilas: ['Madaripur Sadar', 'Kalkini', 'Rajoir', 'Shibchar'] },
    { district: 'Manikganj', upazilas: ['Manikganj Sadar', 'Daulatpur', 'Ghior', 'Harirampur', 'Saturia', 'Shivalaya', 'Singair'] },
    { district: 'Munshiganj', upazilas: ['Munshiganj Sadar', 'Gazaria', 'Lohajang', 'Sirajdikhan', 'Sreenagar', 'Tongibari'] },
    { district: 'Narayanganj', upazilas: ['Narayanganj Sadar', 'Araihazar', 'Bandar', 'Rupganj', 'Sonargaon'] },
    { district: 'Narsingdi', upazilas: ['Narsingdi Sadar', 'Belabo', 'Monohardi', 'Palash', 'Raipura', 'Shibpur'] },
    { district: 'Rajbari', upazilas: ['Rajbari Sadar', 'Baliakandi', 'Goalandaghat', 'Pangsha', 'Kalukhali'] },
    { district: 'Shariatpur', upazilas: ['Shariatpur Sadar', 'Bhedarganj', 'Damudya', 'Gosairhat', 'Naria', 'Zajira'] },
    { district: 'Tangail', upazilas: ['Tangail Sadar', 'Basail', 'Bhuapur', 'Delduar', 'Dhanbari', 'Ghatail', 'Gopalpur', 'Kalihati', 'Madhupur', 'Mirzapur', 'Nagarpur', 'Sakhipur'] },
    { district: 'Barguna', upazilas: ['Barguna Sadar', 'Amtali', 'Bamna', 'Betagi', 'Patharghata', 'Taltali'] },
    { district: 'Barisal', upazilas: ['Barisal Sadar', 'Agailjhara', 'Babuganj', 'Bakerganj', 'Banaripara', 'Gouranadi', 'Hizla', 'Mehendiganj', 'Muladi', 'Uzirpur'] },
    { district: 'Bhola', upazilas: ['Bhola Sadar', 'Borhanuddin', 'Char Fasson', 'Daulatkhan', 'Lalmohan', 'Monpura', 'Tazumuddin'] },
    { district: 'Jhalokathi', upazilas: ['Jhalokathi Sadar', 'Kathalia', 'Nalchity', 'Rajapur'] },
    { district: 'Patuakhali', upazilas: ['Patuakhali Sadar', 'Bauphal', 'Dashmina', 'Galachipa', 'Kalapara', 'Mirzaganj', 'Rangabali', 'Dumki'] },
    { district: 'Pirojpur', upazilas: ['Pirojpur Sadar', 'Bhandaria', 'Kawkhali', 'Mathbaria', 'Nazirpur', 'Nesarabad', 'Indurkani'] },
    { district: 'Bandarban', upazilas: ['Bandarban Sadar', 'Ali Kadam', 'Lama', 'Naikhongchhari', 'Rowangchhari', 'Ruma', 'Thanchi'] },
    { district: 'Brahmanbaria', upazilas: ['Brahmanbaria Sadar', 'Ashuganj', 'Bancharampur', 'Bijoynagar', 'Kasba', 'Nabinagar', 'Nasirnagar', 'Sarail'] },
    { district: 'Chandpur', upazilas: ['Chandpur Sadar', 'Faridganj', 'Haimchar', 'Haziganj', 'Kachua', 'Matlab Dakshin', 'Matlab Uttar', 'Shahrasti'] },
    { district: 'Chattogram', upazilas: ['Chattogram Sadar', 'Anwara', 'Banshkhali', 'Boalkhali', 'Chandanaish', 'Fatikchhari', 'Hathazari', 'Lohagara', 'Mirsharai', 'Patiya', 'Rangunia', 'Raozan', 'Sandwip', 'Satkania', 'Sitakunda'] },
    { district: 'Cumilla', upazilas: ['Cumilla Sadar', 'Barura', 'Brahmanpara', 'Burichong', 'Chandina', 'Chauddagram', 'Daudkandi', 'Debidwar', 'Homna', 'Laksam', 'Lalmai', 'Monohorgonj', 'Meghna', 'Muradnagar', 'Nangalkot', 'Titas'] },
    { district: 'Cox\'s Bazar', upazilas: ['Cox\'s Bazar Sadar', 'Chakaria', 'Kutubdia', 'Maheshkhali', 'Pekua', 'Ramu', 'Teknaf', 'Ukhia'] },
    { district: 'Feni', upazilas: ['Feni Sadar', 'Chhagalnaiya', 'Daganbhuiyan', 'Parshuram', 'Fulgazi', 'Sonagazi'] },
    { district: 'Khagrachari', upazilas: ['Khagrachari Sadar', 'Dighinala', 'Lakshmichhari', 'Mahalchhari', 'Manikchhari', 'Matiranga', 'Panchhari', 'Ramgarh'] },
    { district: 'Lakshmipur', upazilas: ['Lakshmipur Sadar', 'Raipur', 'Ramganj', 'Ramgati', 'Komolnagar'] },
    { district: 'Noakhali', upazilas: ['Noakhali Sadar', 'Begumganj', 'Chatkhil', 'Companiganj', 'Hatiya', 'Senbagh', 'Subarnachar', 'Kabirhat'] },
    { district: 'Rangamati', upazilas: ['Rangamati Sadar', 'Bagaichhari', 'Barkal', 'Kawkhali', 'Belaichhari', 'Kaptai', 'Juraichhari', 'Langadu', 'Naniarchar', 'Rajasthali'] },
    { district: 'Habiganj', upazilas: ['Habiganj Sadar', 'Ajmiriganj', 'Bahubal', 'Baniachong', 'Chunarughat', 'Lakhai', 'Madhabpur', 'Nabiganj'] },
    { district: 'Moulvibazar', upazilas: ['Moulvibazar Sadar', 'Barlekha', 'Juri', 'Kamalganj', 'Kulaura', 'Rajnagar', 'Sreemangal'] },
    { district: 'Sunamganj', upazilas: ['Sunamganj Sadar', 'Bishwamvarpur', 'Chhatak', 'Dakshin Sunamganj', 'Derai', 'Dharampasha', 'Dowarabazar', 'Jagannathpur', 'Jamalganj', 'Sullah', 'Tahirpur'] },
    { district: 'Sylhet', upazilas: ['Sylhet Sadar', 'Balaganj', 'Beanibazar', 'Bishwanath', 'Companigonj', 'Dakshin Surma', 'Fenchuganj', 'Golapganj', 'Gowainghat', 'Jaintiapur', 'Kanaighat', 'Zakiganj', 'Osmani Nagar'] },
    { district: 'Bagerhat', upazilas: ['Bagerhat Sadar', 'Chitalmari', 'Fakirhat', 'Kachua', 'Mollahat', 'Mongla', 'Morrelganj', 'Rampal', 'Sarankhola'] },
    { district: 'Chuadanga', upazilas: ['Chuadanga Sadar', 'Alamdanga', 'Damurhuda', 'Jibannagar'] },
    { district: 'Jashore', upazilas: ['Jashore Sadar', 'Abhaynagar', 'Bagherpara', 'Chaugachha', 'Jhikargachha', 'Keshabpur', 'Manirampur', 'Sharsha'] },
    { district: 'Jhenaidah', upazilas: ['Jhenaidah Sadar', 'Harinakunda', 'Kaliganj', 'Kotchandpur', 'Maheshpur', 'Shailkupa'] },
    { district: 'Khulna', upazilas: ['Khulna Sadar', 'Batiaghata', 'Dacope', 'Dumuria', 'Dighalia', 'Koyra', 'Paikgachha', 'Phultala', 'Rupsha', 'Terokhada'] },
    { district: 'Kushtia', upazilas: ['Kushtia Sadar', 'Bheramara', 'Daulatpur', 'Khoksa', 'Kumarkhali', 'Mirpur'] },
    { district: 'Magura', upazilas: ['Magura Sadar', 'Mohammadpur', 'Shalikha', 'Sreepur'] },
    { district: 'Meherpur', upazilas: ['Meherpur Sadar', 'Gangni', 'Mujibnagar'] },
    { district: 'Narail', upazilas: ['Narail Sadar', 'Kalia', 'Lohagara'] },
    { district: 'Satkhira', upazilas: ['Satkhira Sadar', 'Assasuni', 'Debhata', 'Kalaroa', 'Kaliganj', 'Shyamnagar', 'Tala'] },
    { district: 'Bogra', upazilas: ['Bogra Sadar', 'Adamdighi', 'Dhunat', 'Dhupchanchia', 'Gabtali', 'Kahaloo', 'Nandigram', 'Sariakandi', 'Shajahanpur', 'Sherpur', 'Shibganj', 'Sonatala'] },
    { district: 'Joypurhat', upazilas: ['Joypurhat Sadar', 'Akkelpur', 'Kalai', 'Khetlal', 'Panchbibi'] },
    { district: 'Naogaon', upazilas: ['Naogaon Sadar', 'Atrai', 'Badalgachhi', 'Manda', 'Dhamoirhat', 'Mohadevpur', 'Niamatpur', 'Patnitala', 'Porsha', 'Raninagar', 'Sapahar'] },
    { district: 'Natore', upazilas: ['Natore Sadar', 'Bagatipara', 'Baraigram', 'Gurudaspur', 'Lalpur', 'Singra'] },
    { district: 'Chapai Nawabganj', upazilas: ['Chapai Nawabganj Sadar', 'Bholahat', 'Gomostapur', 'Nachole', 'Shibganj'] },
    { district: 'Pabna', upazilas: ['Pabna Sadar', 'Ataikula', 'Atgharia', 'Bera', 'Bhangura', 'Chatmohar', 'Faridpur', 'Ishwardi', 'Santhia', 'Sujanagar'] },
    { district: 'Rajshahi', upazilas: ['Rajshahi Sadar', 'Bagha', 'Bagmara', 'Charghat', 'Durgapur', 'Godagari', 'Mohanpur', 'Paba', 'Puthia', 'Tanore'] },
    { district: 'Sirajganj', upazilas: ['Sirajganj Sadar', 'Belkuchi', 'Chauhali', 'Kamarkhanda', 'Kazipur', 'Raiganj', 'Shahjadpur', 'Tarash', 'Ullahpara'] },
    { district: 'Dinajpur', upazilas: ['Dinajpur Sadar', 'Birampur', 'Birganj', 'Biral', 'Bochaganj', 'Chirirbandar', 'Phulbari', 'Ghoraghat', 'Hakimpur', 'Kaharole', 'Khansama', 'Nawabganj', 'Parbatipur'] },
    { district: 'Gaibandha', upazilas: ['Gaibandha Sadar', 'Phulchhari', 'Gobindaganj', 'Palashbari', 'Sadullapur', 'Sughatta', 'Sundarganj'] },
    { district: 'Kurigram', upazilas: ['Kurigram Sadar', 'Bhurungamari', 'Chilmari', 'Phulbari', 'Nageshwari', 'Rajarhat', 'Raomari', 'Rowangchhari', 'Ulipur'] },
    { district: 'Lalmonirhat', upazilas: ['Lalmonirhat Sadar', 'Aditmari', 'Hatibandha', 'Kaliganj', 'Patgram'] },
    { district: 'Nilphamari', upazilas: ['Nilphamari Sadar', 'Dimla', 'Domar', 'Jaldhaka', 'Kishoreganj', 'Saidpur'] },
    { district: 'Panchagarh', upazilas: ['Panchagarh Sadar', 'Atwari', 'Boda', 'Debiganj', 'Tetulia'] },
    { district: 'Rangpur', upazilas: ['Rangpur Sadar', 'Badarganj', 'Gangachhara', 'Kaunia', 'Mithapukur', 'Pirgachha', 'Pirganj', 'Taraganj'] },
    { district: 'Thakurgaon', upazilas: ['Thakurgaon Sadar', 'Baliadangi', 'Haripur', 'Pirganj', 'Ranisankail'] },
    { district: 'Mymensingh', upazilas: ['Mymensingh Sadar', 'Bhaluka', 'Dhobaura', 'Fulbaria', 'Gaffargaon', 'Gauripur', 'Haluaghat', 'Ishwarganj', 'Muktagachha', 'Nandail', 'Phulpur', 'Trishal'] },
    { district: 'Netrokona', upazilas: ['Netrokona Sadar', 'Atpara', 'Barhatta', 'Durgapur', 'Kalmakanda', 'Kendua', 'Khaliajuri', 'Madan', 'Mohanganj', 'Purbadhala'] },
    { district: 'Jamalpur', upazilas: ['Jamalpur Sadar', 'Bakshiganj', 'Dewanganj', 'Islampur', 'Madarganj', 'Melandaha', 'Sarishabari'] },
    { district: 'Sherpur', upazilas: ['Sherpur Sadar', 'Jhenaigati', 'Nakla', 'Nalitabari', 'Sreebardi'] }
];

const Location = () => {
    const [selectedDistrict, setSelectedDistrict] = React.useState('');
    const [selectedUpazila, setSelectedUpazila] = React.useState('');

    const handleDistrictChange = (event) => {
        setSelectedDistrict(event.target.value);
        setSelectedUpazila(''); // Reset the selected upazila when district changes
    };

    const handleUpazilaChange = (event) => {
        setSelectedUpazila(event.target.value);
    };

    const filteredUpazilas = selectedDistrict
        ? upazilas.find(d => d.district === selectedDistrict).upazilas
        : [];

    return (
        <div>
            <label htmlFor="district" className=' font-bold'>Select a District: </label>
            <select id="district" value={selectedDistrict} onChange={handleDistrictChange}>
                <option value="">Select a District</option>
                {upazilas.map((district, index) => (
                    <option key={index} value={district.district} className='text-center'>
                        {district.district}
                    </option>
                ))}
            </select>
                
            {selectedDistrict && (
                <>
                    <label htmlFor="upazila" className=' font-bold'>Select an Upazila: </label>
                    <select id="upazila" value={selectedUpazila} onChange={handleUpazilaChange}>
                        <option value="">--Select an Upazila--</option>
                        {filteredUpazilas.map((upazila, index) => (
                            <option key={index} value={upazila} className='text-center'>
                                {upazila}
                            </option>
                        ))}
                    </select>
                </>
            )}
        </div>
    );
};

export default Location;
