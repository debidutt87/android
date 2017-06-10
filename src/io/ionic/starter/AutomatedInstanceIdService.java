package io.ionic.starter;

import android.util.Log;

import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.FirebaseInstanceIdService;

/**
 * Created by Debidutt on 10/06/2017.
 */

public class AutomatedInstanceIdService extends FirebaseInstanceIdService{

    private static final String REGISTRATION_TOKEN = "REGISTRATION_TOKEN";

    @Override
    public void onTokenRefresh() {

        try {
            String recent_token = FirebaseInstanceId.getInstance().getToken();
            Log.d(REGISTRATION_TOKEN, recent_token);
        }catch (Exception e){
            e.printStackTrace();
        }

    }
}
