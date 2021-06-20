import React, { useState, useEffect } from 'react';
import './Profiles.css';
import { Link } from 'react-router-dom';

const Profiles = () => {
	const [ data, setData ] = useState([]);
	const [ page, setPage ] = useState(1);
	const [ loader, setLoader ] = useState(true);

	useEffect(() => {
		fetechData(page);
	}, []);

	function fetechData(page) {
		fetch(`https://randomuser.me/api/?page=${page}&results=10`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				} else {
					return Promise.reject({ status: res.status, statusText: res.statusText });
				}
			})
			.then((res) => {
				if (page > 1) {
					let resultAr = [ ...data, ...res.results ];
					setData(resultAr);
				} else {
					setData(res.results);
				}
				setLoader(false);
			})
			.catch((err) => console.log('Error, with message:', err.statusText));
	}

	const loadMoreHandle = (e) => {
		let bottom = e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight < 50;
		if (bottom) {
			let page_ = page + 1;
			fetechData(page_);
			setLoader(true);
			setPage(page_);
		}
	};

	return (
		<div onScroll={loadMoreHandle} className="table_wrap ">
			<table className="table table-striped table-dark ">
				<thead>
					<tr className="text-center">
						<th scope="col">Name</th>
						<th scope="col">Gender</th>
						<th scope="col">Profil picture</th>
					</tr>
				</thead>
				<tbody className="text-center">
					{data.map((item, index) => {
						return (
							<tr key={index}>
								<td>{item.name['first']}</td>
								<td>{item.gender}</td>
								<td>
									<img src={item.picture['thumbnail']} alt="profile-pic" />{' '}
								</td>
							</tr>
						);
					})}
				</tbody>
				<div class="text-center">
					<div class="spinner-border text-warning" role="status">
						<span class="sr-only">Loading...</span>
					</div>
				</div>
			</table>
		</div>
	);
};

export default Profiles;
