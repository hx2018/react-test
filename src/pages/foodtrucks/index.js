import React from "react";
import { connect } from "react-redux";
import { Button, Table, Switch } from "antd";
import {
  getFoodTrucksList,
  deleteFoodTrucks,
  updateStatus,
} from "../../api/foodtrucks";

import "./index.less";

class FoodTrucks extends React.Component {
  componentDidMount() {
    this.getList();
  }

  getList = () => {
    const { setList } = this.props;
    getFoodTrucksList().then((res) => {
      if (res.status === 200) {
        setList(res.data);
      }
    });
  };

  onSwitchChange = (item) => {
    updateStatus({ id: item.id, status: !item.status }).then((res) => {
      if (res.status === 200) {
        this.getList();
      }
    });
  };

  deleteFoodTrucks = (item) => {
    deleteFoodTrucks(item.id).then((res) => {
      if (res.status === 200) {
        this.getList();
      }
    });
  };

  columns = [
    {
      title: "locationid",
      dataIndex: "id",
    },
    {
      title: "Applicant",
      dataIndex: "Applicant",
    },
    {
      title: "FacilityType",
      dataIndex: "FacilityType",
      filters: [
        { text: "Push Cart", value: "Push Cart" },
        { text: "Truck", value: "Truck" },
      ],
      onFilter: (value, record) => record.FacilityType.indexOf(value) === 0,
    },
    {
      title: "cnn",
      dataIndex: "cnn",
    },
    {
      title: "Status",
      dataIndex: "Status",
      render: (status) => <span className={`text-${status}`}>{status}</span>,
    },
    {
      title: "LocationDescription",
      dataIndex: "LocationDescription",
    },
    {
      title: "Address",
      dataIndex: "Address",
    },
    {
      title: "blocklot",
      dataIndex: "blocklot",
    },
    {
      title: "block",
      dataIndex: "block",
    },
    {
      title: "lot",
      dataIndex: "lot",
      filters: [
        { text: "31", value: "31" },
        { text: "17", value: "17" },
        { text: "04", value: "04" },
        { text: "19", value: "19" },
        { text: "06", value: "06" },
        { text: "01", value: "01" },
        { text: "010A", value: "010A" },
        { text: "11", value: "11" },
        { text: "20", value: "20" },
      ],
      onFilter: (value, record) => record.lot.indexOf(value) === 0,
    },
    {
      title: "permit",
      dataIndex: "permit",
    },
    {
      title: "FoodItems",
      dataIndex: "FoodItems",
    },
    {
      title: "X",
      dataIndex: "X",
    },
    {
      title: "Y",
      dataIndex: "Y",
    },
    {
      title: "Latitude",
      dataIndex: "Latitude",
    },
    {
      title: "Longitude",
      dataIndex: "Longitude",
    },
    {
      title: "Schedule",
      dataIndex: "Schedule",
    },
    {
      title: "Approved",
      dataIndex: "Approved",
    },
    {
      title: "Received",
      dataIndex: "Received",
    },
    {
      title: "ExpirationDate",
      dataIndex: "ExpirationDate",
    },
    {
      title: "ZipCodes",
      dataIndex: "ZipCodes",
    },

    // {
    //   title: "操作",
    //   dataIndex: "actions",
    //   render: (value, record) => (
    //     <div>
    //       <Button type="danger" onClick={() => this.deleteFoodTrucks(record)}>
    //         删除
    //       </Button>
    //     </div>
    //   ),
    // },
  ];

  render() {
    const { list } = this.props;
    return (
      <div className="FoodTrucks">
        <Table
          bordered
          columns={this.columns}
          dataSource={list}
          rowKey={(record) => record.id}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.foodtrucks.foodTrucksList,
});
const mapActionToProps = (dispatch) => ({
  setList: (payload) => dispatch({ type: "SET_FOOD_TRUCKS_LIST", payload }),
});

export default connect(mapStateToProps, mapActionToProps)(FoodTrucks);
