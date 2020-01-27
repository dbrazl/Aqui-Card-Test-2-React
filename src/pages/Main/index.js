import React, { useEffect, useState } from 'react';

import _ from 'lodash';
import api from '../../services/api';
import View from './view';

export default function Model() {
  const [users, setUsers] = useState([]);
  const [newData, setNewData] = useState([]);
  const [haveChange, setHaveChange] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/user');
      setUsers(response.data);
    }

    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const response = await api.get('/user');
      setNewData(response.data);
    }

    getData();
  }, []);

  const haveChangeOnData = () => {
    if (!_.isEqual(newData, users)) return true;
    return false;
  };

  const onChangeName = async (name, code) => {
    const data = newData.map((item, index) => {
      if (item.code === code) {
        if (name !== '') {
          item.name = name;
        } else {
          item.name = users[index].name;
        }
      }
      return item;
    });

    setNewData(data);
    setHaveChange(haveChangeOnData());
  };

  const onChangeBirthday = (birthday, code) => {
    const data = newData.map((item, index) => {
      if (item.code === code) {
        if (birthday !== '') {
          item.birthday = birthday;
        } else {
          item.birthday = users[index].birthday;
        }
      }
      return item;
    });
    setNewData(data);
    setHaveChange(haveChangeOnData());
  };

  const saveChanges = async () => {
    async function put(item) {
      const { name, birthday } = item;
      await api.put(`/user?code=${item.code}`, { name, birthday });
    }

    newData.forEach((item, index) => {
      if (
        item.name !== users[index].name ||
        item.birthday !== users[index].birthday
      ) {
        put(item);
      }
    });

    const response = await api.get('/user');
    setUsers(response.data);
    setNewData(response.data);
    setHaveChange(false);
  };

  const resetChanges = async () => {
    const response = await api.get('/user');
    setNewData([]); //Não sei pq, mas funcionou
    setNewData(response.data);
    setHaveChange(false);
  };

  const deleteUser = async code => {
    await api.delete(`/user?code=${code}`);

    const response = await api.get('/user');
    setNewData(response.data);

    const response2 = await api.get('/user');
    setUsers(response2.data);
  };

  const searchUser = async info => {
    if (info !== '') {
      if (Number.isInteger(parseInt(info, 10))) {
        const response = await api.get(`/user/getbycode?code=${info}`);
        setNewData([response.data]);
      } else {
        const response = await api.get(`/user/getbyname?name=${info}`);
        setNewData(response.data);
      }
    } else {
      const response = await api.get('/user');
      setNewData([]);
      setNewData(response.data);
    }
  };

  const saveNewUser = async (name, birthday) => {
    await api.post('/user', { name, birthday });

    const response = await api.get('/user');
    setNewData(response.data);

    const response2 = await api.get('/user');
    setUsers(response2.data);
  };

  const propsView = {
    users,
    newData,
    onChangeName,
    onChangeBirthday,
    haveChange,
    saveChanges,
    resetChanges,
    deleteUser,
    searchUser,
    showModal,
    setShowModal,
    saveNewUser,
  };

  return <View propsView={propsView} />;
}
