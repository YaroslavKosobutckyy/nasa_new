/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPhotos } from '../../api/photosApi';
import Photo from './Photo';
import NoData from '../NoData';
import Loader from '../Loader';
import Error from '../Error';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { BtnStyle } from "./style";

function dateToYMD(date) {
    var d = date.getDate();
    var m = date.getMonth() + 1; //Month from 0 to 11
    var y = date.getFullYear();
    return `${y}-${m}-${d}`;
}

class PhotosList extends Component {
    constructor(props) {
        super(props);
        this.loadPhotos = this.loadPhotos.bind(this);
        this.loadNextPage = this.loadNextPage.bind(this);
        this.loadInitialPage = this.loadInitialPage.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.removePhotoFilterName = this.removePhotoFilterName.bind(this);
        // this.removePhotoFilterRover = this.removePhotoFilterRover.bind(this);
        let date = new Date();
        date.setDate(date.getDate() - 1);
        this.state = {
            page: 1,
            date: dateToYMD(date),
            value1: '',
            value2: ''
        }
    }

    componentDidMount() {
        this.loadInitialPage();

    }
    // componentDidUpdate() {
    //     this.removePhotoFilterName();
    //     this.removePhotoFilterRover();
    // }
    handleChangeOne = event => {
        this.setState({
            value1: event.target.value,

        });
    };
    handleChangeSecond = event => {
        this.setState({
            value2: event.target.value,
        });
    };

    loadPhotos() {
        getPhotos(this.state.page, this.state.date);
    }

    loadInitialPage() {
        this.setState(
            prevState => ({ page: 1 }),
            () => {
                this.loadPhotos();
            });
    }

    loadNextPage() {
        this.setState(
            prevState => ({ page: prevState.page + 1 }),
            () => {
                this.loadPhotos();
            });
    }

    handleDateChange(e) {
        this.setState({
            date: e.target.value
        });
    }

    showPhotos() {
        const { data, loading, error } = this.props.photos;
        if (error) {
            return <Error message={error} />;
        }
        if (!data.length) {
            return <NoData />;
        }
        return (
            <>
                {loading && <Loader />}
                <div className="row">
                    {data.map(photo => <Photo key={`photo-${photo.id}`} photo={photo} />)}
                </div>
            </>
        );
    }

    removePhotoFilterName() {
        const { data } = this.props.photos;
        {
            console.log("props1", this.props.photos.data);
            const datafoto = data.filter((data) => data.camera.full_name === this.value2);
            this.setState({ data })
        }
    };
    // removePhotoFilterRover() {
    //     const { data } = this.props.photos;
    //     if ((this.value2 !== '') && (data.rover.name)) {
    //         const datafoto = data.filter((data) => data.rover.name === this.value2)
    //         this.setState({ data })
    //     }
    // };


    render() {
        // console.log("props1", this.props.photos.data.camera.full_name);
        // console.log("props2", this.props.photos.data[2].camera.id);
        return (
            <>
                <div className="input">
                    <label htmlFor="date" className="col">Земна дата:</label>
                    <div>
                        <Input
                            defaultValue="Input date"
                            type="text"
                            id="date"
                            className="form-control"
                            value={this.state.date}
                            onChange={this.handleDateChange}
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                    </div>
                </div>
                <div className="btn">
                    <BtnStyle>
                        <Button
                            color="primary"
                            variant="outlined"
                            className="btn"
                            onClick={this.loadInitialPage}>Оновити
                        </Button>
                    </BtnStyle>
                </div>

                {this.showPhotos()}

                <BtnStyle>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Paper className="sectionOne">

                                <div className="radioOne">
                                    <FormControl component="fieldset" className="formControl">
                                        <FormLabel component="legend">input Rover:</FormLabel>
                                        <RadioGroup
                                            aria-label="Gender"
                                            name="gender1"
                                            className="radioGroup"
                                            value={this.state.value}
                                            onChange={this.handleChangeOne}
                                        >
                                            <FormControlLabel value="Curiosity" control={<Radio />} label="Curiosity" />
                                            <FormControlLabel value="Opportunit" control={<Radio />} label="Opportunity" />
                                            <FormControlLabel value="Spirit" control={<Radio />} label="Spirit" />

                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={6}>
                            <Paper className="sectionTwo">
                                <div className="radioTwo">
                                    <FormControl component="fieldset" className="formControl">
                                        <FormLabel component="legend">input Camera:</FormLabel>
                                        <RadioGroup
                                            aria-label="Gender"
                                            name="gender1"
                                            className="radioGroup"
                                            value={this.state.value}
                                            onChange={this.handleChangeSecond}
                                        >
                                            <FormControlLabel value="Front Hazard Avoidance Camera" control={<Radio />} label="Front Camera" />
                                            <FormControlLabel value="Navigation Camera" control={<Radio />} label="Navigation Camera" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </BtnStyle>
                <div className="row">
                    <div className="cols">
                        <BtnStyle>
                            <Button
                                color="primary"
                                variant="outlined"
                                className="btn" onClick={this.loadNextPage}>Довантажити ще 25
                            </Button>
                        </BtnStyle>
                    </div>
                </div>

            </>
        );
    }
}

const mapStateToProps = state => ({
    photos: state.photos
});

export default connect(mapStateToProps)(PhotosList);
