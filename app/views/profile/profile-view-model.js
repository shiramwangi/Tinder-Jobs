import { Observable } from '@nativescript/core';
import { userProfile } from '../../shared/data/mock-data';

export function createViewModel() {
    const viewModel = new Observable();
    viewModel.userProfile = userProfile;
    return viewModel;
}