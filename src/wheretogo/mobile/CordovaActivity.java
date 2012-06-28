package wheretogo.mobile;

import android.os.Bundle;
import org.apache.cordova.DroidGap;

public class CordovaActivity extends DroidGap {
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }

}
