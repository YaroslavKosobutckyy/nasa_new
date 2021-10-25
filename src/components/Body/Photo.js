/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
export default ({ photo }) => (
    <div className="col">
        <Grid container spacing={photo.id}>
            <Grid item xs={4}>
                <Paper className="sectionOne">
                    <div className="card-body">
                        <h5 className="card-title">Photo ID: {photo.id}</h5>
                        <ul className="list-group">
                            <li className="list-group-item ">
                                <strong>Camera:</strong>
                                <span>{photo.camera.full_name}</span>
                            </li>
                            <li className="list-group-item">
                                Земна дата:
                                <span>{photo.earth_date}</span>
                            </li>
                            <li className="list-group-item">
                                День Марса:
                                <span>{photo.sol}</span>
                            </li>
                            <li className="list-group-item">
                                <strong>Rover:</strong>
                                <span
                                >{photo.rover.name}</span>
                                <ul className="list-group">
                                    <li className="list-group-item">
                                        Запуск:
                                        <span>{photo.rover.launch_date}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Посадка:
                                        <span>{photo.rover.landing_date}</span>
                                    </li>
                                    <li className="list-group-item">
                                        Статус:
                                        <span className="badge">{photo.rover.status}</span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Paper className="sectionTwo">
                    <photoStyle>
                        <img
                            src={photo.img_src}
                            className="cardImg"
                            width="50%"
                            height="50%"
                            alt={photo.id}
                        />
                    </photoStyle >
                </Paper>
            </Grid>
        </Grid>
    </div>
);
