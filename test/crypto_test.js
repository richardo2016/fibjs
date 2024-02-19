var test = require("test");
test.setup();

var crypto = require("crypto");
var hash = require("hash");
var fs = require("fs");
var os = require("os");
var encoding = require("encoding");
var hex = require("hex");
var path = require("path");

var rsa4096_pem = "-----BEGIN RSA PRIVATE KEY-----\n" +
    "MIIJJwIBAAKCAgEAiAUwIJyWHEnusONGDVCguTr3FkkVoSiDJ2mmFYYibt1paXpI\n" +
    "iEKQy+OwykFcOG0Ew9UGEEvveRQbKN+bpUV5uH6q7pgnfDubA2VSLST7lHcXJd2a\n" +
    "s4DNyFMtgXLOj0dVSk4NduWlVgY2fUu17sJJBmysYjCjmB76P92DLfIvlI+4OYEO\n" +
    "FSLQCG56KA8ZvP9HTnHiI0Lnerjf14cjr1Ubgw0ce9KMJ96LLnZp9Q6hBCXalagD\n" +
    "o9MofuyScpFX1X0ixirQ2VtomzTvle9EIdfmat6EoLzxz8YNfl6mllvCVrlFJw1D\n" +
    "vXfxLlkDR9I+te1B89L7Eljt90VBKmzjjJiKmuhmW8HhJMpe3VBG7t8c3J+F/cJL\n" +
    "x7ZDk6/XNhxWPbzL9SNhTRg6015YDsX01bFyi1GUHdFocPmzgZ6nw3anFT85+q7l\n" +
    "9M4yGhRQbfUWQ4rT0zCFobJZQeO4ZyiBM0fuAGhln0MogIdFaoh7xmVggL6XxJVO\n" +
    "ApXXGV7Z8xDjzbLpBI2UHiX8W33ZbrXYiDexvfBQuR2SFw372h/LCF+fOI8kxZr9\n" +
    "BNU1RSf26RCX0Mi0Fdbz0eeXLa3N42fGAxHYUCN5M4WEtAPcdQjQAZ7gZ+Voy9nN\n" +
    "jMoQMWzzH84XHUI1byA8T795CnVmKMiHyCWEnOGV1ptmZrzoZoa6x6bOHukCAwEA\n" +
    "AQKCAgAt7qqQ6K/cP68l9qmqR2bvBhV4Zheyw05+2bNnI1OvYn99SfkCYpAo+euy\n" +
    "cR3mRBJO2znf+PSWS47cX55c0jhHcCbiyWjUEADJxcZZTlrSiOC9PbdHFKDpHAWK\n" +
    "6C0Ov0TzAaaUVvpdMV3nM9DtHpiwXbRcuBYWgad6N6BbvKQKo/nPGWCbDJV5s2z2\n" +
    "6BqF8yKuP9DgnXAzxgh47L7FL5VJzPyoZ7JCqGkRuJURVu5Sy0GkNgd8pArRyauu\n" +
    "mpwxkL9UchLyw2ZwuxCI7jJwx0qdHiVlbkiuJDBcUzQoJDZdONU8WcNdUQqV3yM3\n" +
    "dq0MnGEgKEf2qyc40B8wZ3L0AHMVXISfuQnizwtqzj5T6ka96NlOWT7y4MCswD69\n" +
    "AriiNMkdJJhLlqt7kRkKXGxHhdDcKdHR6usK1J3Jui3WCh14y61Ee1AZVR9UjgfJ\n" +
    "JG+L1yHvqIDeInAXPdJlHipxHKGOQXX/Ii+0S7i6oV07K/CQkTVCvyLYY+Iqpi/9\n" +
    "GvtVGSBa795dxD6QUtmM1I6RJ5Jdu/zjtmjvlfgNCqd31JOGhmNekwIeKjF4h3ZT\n" +
    "xTb/wUYm25vs+SRaDM79jj7MwI1j/lrXtE/XIt+0HLYF0tmcLsLlE9b7CZXxCGMX\n" +
    "mAzWQAUa9H0Pe0Imven4+BgI9A8nhnjlc92SZRGdCGUdkJMpvQKCAQEAvpZmPuu9\n" +
    "eS25yMcYKQwtwouShk8C+VCexKymleuslN7riCemy3JZhkRkd/+InaQ+bDS93CfC\n" +
    "U4p//unoFjoA6rKjBqPyIGnUiZOPFNukVBz4dfKoiScYtTEU0cy8e/a7DEcePOXU\n" +
    "edzK6HuDkQqvsSU0Xoy55/KdipClQ37/H+IR3Xon6I17lAQ8x4sl8CILKrmeZeHC\n" +
    "o9ve6R2L3bUz2lacuxlZIff6QeVPmLWTKCOviFh5nmwI+IdzX5nI0WOjPH8s4EOg\n" +
    "5SyY1NWAq0u75gjbH4K5ljByNolNJ1ErdheQ++KNcL/60q3wOlRxyXOd18i2AFhn\n" +
    "IPyH1XT2JiRLJwKCAQEAtrRYO3zWY5Hv7kB1aPvBXUVK/UbPf9Hv8g4IQtrOod3c\n" +
    "n69ni/bBNW5TbWcdO6+lk3ag5qG/deexPe6Zi/LYymaO7noypYnhX/r8aqwYg5se\n" +
    "NVtcawAxazdAkIY5wRin8BB6MpDW7ZkKe/44DuGdiJjRSbgGGZdGshjYJle5ImyL\n" +
    "Yz5YiIxsSqdzCAwCAHMxSASbCzLSlQtkHGbrSexjd9WWIAXlmndRezut5tpx0Qhs\n" +
    "HeAhRSOoMaAI/2ORAPu7JQ+t+p2txNUkb+tvyWx/Y5g02ghk9Tx/2ogJj4d3DnDF\n" +
    "rnRjQPkw8wBSiQeihNQ2w1+hY6Vp8QjqJ99XrWvPbwKCAQBzrNM4A1sHzpIBY52t\n" +
    "ZD/t4Uq4jAIxEhabJnMhcV5ZKQfppq9csfXWQXJ9RrJDg+mDQWuu0M7oZ5qSPKPp\n" +
    "waDG0k+SezU9KR6ftdjU/w65IrBG3lYekIU1jCmnwMzxrGoQ5KVcrt4MbM8W1cif\n" +
    "4s2KBhvH+z/moOGvtWUpF05/qnXPaBIK2ryTtRKyxijrm64Na4XRLno1fADKmm1G\n" +
    "znE/ZuxPvu3TaTASiLyL4kEDzsz+Qzzlw4qaVZPYBX3WYNQ1pra1Ezb3gd7s5vzm\n" +
    "etv7nYppkK1Vk+fuY91ZLLHlRh5wUywnr83ryziQHqrFa4/05VRZ104Yvk0vaILx\n" +
    "2XtnAoIBABc+pqMa5OPSI2Z6iPWMYjONp1bF9Yxbl12Cb4ah8/wgD/u5A0GJaVd0\n" +
    "6+RVZCC93iD+zMXK+mLz0VcBzkNB6FcH6VNp9JufCS9+7TJdJtlHmPZM41sxsRfk\n" +
    "9a/tg9ePXX5rekCIsO+VswHHfDZYegRw/N+WLCCBYJs0Efv+2S0KBkngGr90ripp\n" +
    "V3dEn9SS00hIXbl1A9m2k0wRxAmpq5YJdIoqdeXLHHDDTQK79BMWMTsz0sfLG5EE\n" +
    "vWBQuJgZbtvuPMJP4VXTkEk0+Qn1Zdez+7Vpr/6LbfDNsfmy0HDj5CKn6CDSE2o3\n" +
    "Nkj80a54mWcN+aiF2Q6zhacBAVStDL0CggEAFxeLSz+9JNnPO/rlHl1ZKfZZ4Nt/\n" +
    "Ys7LhCoZ5Gz4TjlUN3LDpYe8EoeW+0NDo+vsWPM8jDVGBp/OawaXxti3ruqyW8dS\n" +
    "BGP4x0BgoV5I8nA3LWyRszw02nWRm99TFGqeM/wzGyoVLfJ+KnK0J/HXSgIeJMw9\n" +
    "yV+l23/N9OyoBjo3d1zuPMAK6BDqPxcIXR+Sp+q84HU3WN1UHk1uRbSasUGGsFND\n" +
    "IkmCaMpHFaTuv5tgqUV0ljGlh1zG616zKkNaYRiRK2h4JGAu6O+xdQFUjsUVaCPi\n" +
    "6BtFtiscxqvXU4dcYmosNMhtTwjHaWhhC8877i2gZ97Vum2RzMz3xi+++g==\n" +
    "-----END RSA PRIVATE KEY-----\n";

var pub_rsa4096_pem = "-----BEGIN PUBLIC KEY-----\n" +
    "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAiAUwIJyWHEnusONGDVCg\n" +
    "uTr3FkkVoSiDJ2mmFYYibt1paXpIiEKQy+OwykFcOG0Ew9UGEEvveRQbKN+bpUV5\n" +
    "uH6q7pgnfDubA2VSLST7lHcXJd2as4DNyFMtgXLOj0dVSk4NduWlVgY2fUu17sJJ\n" +
    "BmysYjCjmB76P92DLfIvlI+4OYEOFSLQCG56KA8ZvP9HTnHiI0Lnerjf14cjr1Ub\n" +
    "gw0ce9KMJ96LLnZp9Q6hBCXalagDo9MofuyScpFX1X0ixirQ2VtomzTvle9EIdfm\n" +
    "at6EoLzxz8YNfl6mllvCVrlFJw1DvXfxLlkDR9I+te1B89L7Eljt90VBKmzjjJiK\n" +
    "muhmW8HhJMpe3VBG7t8c3J+F/cJLx7ZDk6/XNhxWPbzL9SNhTRg6015YDsX01bFy\n" +
    "i1GUHdFocPmzgZ6nw3anFT85+q7l9M4yGhRQbfUWQ4rT0zCFobJZQeO4ZyiBM0fu\n" +
    "AGhln0MogIdFaoh7xmVggL6XxJVOApXXGV7Z8xDjzbLpBI2UHiX8W33ZbrXYiDex\n" +
    "vfBQuR2SFw372h/LCF+fOI8kxZr9BNU1RSf26RCX0Mi0Fdbz0eeXLa3N42fGAxHY\n" +
    "UCN5M4WEtAPcdQjQAZ7gZ+Voy9nNjMoQMWzzH84XHUI1byA8T795CnVmKMiHyCWE\n" +
    "nOGV1ptmZrzoZoa6x6bOHukCAwEAAQ==\n" +
    "-----END PUBLIC KEY-----\n";

var ec_pem = "-----BEGIN EC PRIVATE KEY-----\n" +
    "MIHcAgEBBEIB+QhtQdd9bjWeN2mgq6qoqW51ygslLwP+gwTCSP4ZVpcU0pxwigXm\n" +
    "Ioa7Zzr2Q0OOjzdH/vDIaV9FzOySWSKTVJOgBwYFK4EEACOhgYkDgYYABAE3zTRb\n" +
    "rr5Rsa0xqF4Mn0gBoETTQ5zt6zd5O+LqyiXVUteEWIXZ0sJvdQZvhdZfk9VypQGN\n" +
    "skZ8xvcNVJL6PHNMCwEgR6q67gepHZBFAd75Vt/lCJJOB7SnVHk8Dfu5t49q4Gb2\n" +
    "EdX30QGqQ71qihogY6Jqlmn8aJAZGwyNHPeX+n+F1A==\n" +
    "-----END EC PRIVATE KEY-----\n";

var ec256_pem = "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHQCAQEEIAp9Kd9+KD3LRbZLxxA6IG+brTA/pgHIR3ULfOgJc6a1oAcGBSuBBAAK\n" +
    "oUQDQgAEpNdY6eCd+synm6iEU5MTUZZUZumR+DglOJh3OQ/y8PafXkcwXZq5mNp2\n" +
    "LG2Ho+7ATaE5e03TTWWhhqfHj4scBQ==\n" +
    "-----END EC PRIVATE KEY-----\n";

var pub_ec_pem = "-----BEGIN PUBLIC KEY-----\n" +
    "MIGbMBAGByqGSM49AgEGBSuBBAAjA4GGAAQBN800W66+UbGtMaheDJ9IAaBE00Oc\n" +
    "7es3eTvi6sol1VLXhFiF2dLCb3UGb4XWX5PVcqUBjbJGfMb3DVSS+jxzTAsBIEeq\n" +
    "uu4HqR2QRQHe+Vbf5QiSTge0p1R5PA37ubePauBm9hHV99EBqkO9aooaIGOiapZp\n" +
    "/GiQGRsMjRz3l/p/hdQ=\n" +
    "-----END PUBLIC KEY-----\n";

var sm2_pem = "-----BEGIN EC PRIVATE KEY-----\n" +
    "MHcCAQEEIH3EUWpWsnLGl6SkGBnG5lPEIvdyql56aHQMCCt7xDqCoAoGCCqBHM9V\n" +
    "AYItoUQDQgAE1KnIoMvdNODUrcEzQNnHbplwxNNyuHwIUnU0oNQ/0R1z97YIe/k8\n" +
    "HX6wrPMUazfS1PVd/A9R8gadvlURQ3lufg==\n" +
    "-----END EC PRIVATE KEY-----\n";

var pub_sm2_pem = "-----BEGIN PUBLIC KEY-----\n" +
    "MFkwEwYHKoZIzj0CAQYIKoEcz1UBgi0DQgAE1KnIoMvdNODUrcEzQNnHbplwxNNy\n" +
    "uHwIUnU0oNQ/0R1z97YIe/k8HX6wrPMUazfS1PVd/A9R8gadvlURQ3lufg==\n" +
    "-----END PUBLIC KEY-----\n";

var ca1 = "-----BEGIN CERTIFICATE-----\n" +
    "MIIDcjCCAlqgAwIBAgIBETANBgkqhkiG9w0BAQUFADA7MQswCQYDVQQGEwJOTDER\n" +
    "MA8GA1UEChMIUG9sYXJTU0wxGTAXBgNVBAMTEFBvbGFyU1NMIFRlc3QgQ0EwHhcN\n" +
    "MTIwNTEwMTMyMzQxWhcNMjIwNTExMTMyMzQxWjA6MQswCQYDVQQGEwJOTDERMA8G\n" +
    "A1UEChMIUG9sYXJTU0wxGDAWBgNVBAMTD3d3dy5leGFtcGxlLmNvbTCCASIwDQYJ\n" +
    "KoZIhvcNAQEBBQADggEPADCCAQoCggEBALk8SsXIo46QF6SeUqpxdSZhgOfHtW2M\n" +
    "/6q2QSa3vhGtXHMWDGQRSAT/1uE7BduJu7OXCdUcFN1ohzmwPXHL4nbQGtgYLYAb\n" +
    "VPblRJrxy69hLt9JDZ0Jt+2x/Tz9PPokz12/fORT5yW16kQi6SbT6iCUnuZhZ7ou\n" +
    "B2cLAy+iCe3wM48LzhDvZ6TGCNrB7cI/10rdFT35XhyBYEY+tbM9L6beRxy8kq7r\n" +
    "3ydrFla33OzRVVelbux1JfW3e9+r0jpakZh9lxcLEwqna0qLwUcw+zr4QQTVwd+4\n" +
    "Hb97AaVlouAeNremXMwwWvjNb83xGWIlygHjNX/6IPXc/WmyagB9F/cCAwEAAaOB\n" +
    "gTB/MAkGA1UdEwQCMAAwHQYDVR0OBBYEFH3knGvm+XF9RtISPa1rHf3CqnhMMB8G\n" +
    "A1UdIwQYMBaAFLRa5KWz3tJS9rnVppUP6z68x/3/MDIGA1UdEQQrMCmCC2V4YW1w\n" +
    "bGUuY29tggtleGFtcGxlLm5ldIINKi5leGFtcGxlLm9yZzANBgkqhkiG9w0BAQUF\n" +
    "AAOCAQEATwnLetXu9e9iDdx7ooXWjMqVtGvaEVuSAHUTucoLzur7wx/iP38hdHni\n" +
    "5rzaBuUvb/ZVxnM5z0i8DS8M0noGw0pM2UhdoNBzieTUhR2Wmg5XmcZvHSEnH40F\n" +
    "KehAroI5aMOXB888k0wa3y+mpFVIf3yMGski2iTNkjnGiuywjfVpgmfLBO7eU0GW\n" +
    "wSfcL/4z+tMOuNQyqYQoU6Xw0YnVopjnFpG7nMBBjoxYrP/j3S56q7C5cXatDycz\n" +
    "96kp08B2wL8GQHwO1aR8iuIybhau2mQfsFV8293xpLpEfLOZWNI0bgDql2wUOvIQ\n" +
    "HgqiSRB2AfTyyBj9zGNGEosJG/GU5g==\n" +
    "-----END CERTIFICATE-----\n";

var ca2 = "-----BEGIN CERTIFICATE-----\n" +
    "MIIDQjCCAiqgAwIBAgIBCDANBgkqhkiG9w0BAQ4FADA7MQswCQYDVQQGEwJOTDER\n" +
    "MA8GA1UEChMIUG9sYXJTU0wxGTAXBgNVBAMTEFBvbGFyU1NMIFRlc3QgQ0EwHhcN\n" +
    "MTEwMjEyMTQ0NDA3WhcNMjEwMjEyMTQ0NDA3WjA/MQswCQYDVQQGEwJOTDERMA8G\n" +
    "A1UEChMIUG9sYXJTU0wxHTAbBgNVBAMTFFBvbGFyU1NMIENlcnQgU0hBMjI0MIIB\n" +
    "IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuTxKxcijjpAXpJ5SqnF1JmGA\n" +
    "58e1bYz/qrZBJre+Ea1ccxYMZBFIBP/W4TsF24m7s5cJ1RwU3WiHObA9ccvidtAa\n" +
    "2BgtgBtU9uVEmvHLr2Eu30kNnQm37bH9PP08+iTPXb985FPnJbXqRCLpJtPqIJSe\n" +
    "5mFnui4HZwsDL6IJ7fAzjwvOEO9npMYI2sHtwj/XSt0VPfleHIFgRj61sz0vpt5H\n" +
    "HLySruvfJ2sWVrfc7NFVV6Vu7HUl9bd736vSOlqRmH2XFwsTCqdrSovBRzD7OvhB\n" +
    "BNXB37gdv3sBpWWi4B42t6ZczDBa+M1vzfEZYiXKAeM1f/og9dz9abJqAH0X9wID\n" +
    "AQABo00wSzAJBgNVHRMEAjAAMB0GA1UdDgQWBBR95Jxr5vlxfUbSEj2tax39wqp4\n" +
    "TDAfBgNVHSMEGDAWgBS0WuSls97SUva51aaVD+s+vMf9/zANBgkqhkiG9w0BAQ4F\n" +
    "AAOCAQEAuJsK0bTRpM4FOUJ6O3te/ZdXijZgQjnQ5gycfi8rvu/nRTR3SHoQSv12\n" +
    "ykI5JTz6GfhjbOc2J5rsBs7k9ywuxjbBJb2rCari2k7errX1up6QJFI0lpZhTCa1\n" +
    "V2WxEO0TK1SQztMhy4zTTGzl4XgiFj/hvvHuXTlIoeaARvRG8nkDPvH8UUfZBeiF\n" +
    "gRsLT/qFnc7ndlpv2pifQ/HzLy9XKKpwFIJ/1WkUjPmCti+m37VrDkPJlpFkPYuo\n" +
    "FxWaiEKk0JDAo6Lh3faVbTudcaYeniwe2/Zfk0Ms7VNwVVBW382WbNWRD7Gn9LcX\n" +
    "nR8L9gv4/ud83sEgt/xpE7riYZulYg==\n" +
    "-----END CERTIFICATE-----\n";

var ca3 = "-----BEGIN CERTIFICATE-----\n" +
    "MIIBiTCCATSgAwIBAgIBATAMBggqgRzPVQGDdgUAMB8xCzAJBgNVBAYTAkNOMRAw\n" +
    "DgYDVQQKEwdiYW96LmNuMB4XDTE5MTIwMzA3MDE1OFoXDTIwMTIwMzA3MDE1OFow\n" +
    "MTELMAkGA1UEBhMCQ04xEDAOBgNVBAoTB2Jhb3ouY24xEDAOBgNVBAMTB2Jhb3ou\n" +
    "bWUwWTATBgcqhkjOPQIBBggqgRzPVQGCLQNCAATUqcigy9004NStwTNA2cdumXDE\n" +
    "03K4fAhSdTSg1D/RHXP3tgh7+TwdfrCs8xRrN9LU9V38D1HyBp2+VRFDeW5+o00w\n" +
    "SzAJBgNVHRMEAjAAMB0GA1UdDgQWBBSr7lpWpgygM4V6wgXDSpwXBWffXzAfBgNV\n" +
    "HSMEGDAWgBSr7lpWpgygM4V6wgXDSpwXBWffXzAMBggqgRzPVQGDdgUAA0EA2eb6\n" +
    "MBVIaMFVbDpUj4O/Umpskcx0yIG3yDH8HrH2JThVK4kcN5jQu+WYZ9fk1Rs/2oVg\n" +
    "j3U6JanA9EXDi7dezQ==\n" +
    "-----END CERTIFICATE-----\n";

var pk = "-----BEGIN PUBLIC KEY-----\n" +
    "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAuTxKxcijjpAXpJ5SqnF1\n" +
    "JmGA58e1bYz/qrZBJre+Ea1ccxYMZBFIBP/W4TsF24m7s5cJ1RwU3WiHObA9ccvi\n" +
    "dtAa2BgtgBtU9uVEmvHLr2Eu30kNnQm37bH9PP08+iTPXb985FPnJbXqRCLpJtPq\n" +
    "IJSe5mFnui4HZwsDL6IJ7fAzjwvOEO9npMYI2sHtwj/XSt0VPfleHIFgRj61sz0v\n" +
    "pt5HHLySruvfJ2sWVrfc7NFVV6Vu7HUl9bd736vSOlqRmH2XFwsTCqdrSovBRzD7\n" +
    "OvhBBNXB37gdv3sBpWWi4B42t6ZczDBa+M1vzfEZYiXKAeM1f/og9dz9abJqAH0X\n" +
    "9wIDAQAB\n" +
    "-----END PUBLIC KEY-----\n";

var req1 = "-----BEGIN CERTIFICATE REQUEST-----\n" +
    "MIIEdjCCAl4CAQAwMTELMAkGA1UEBhMCQ04xEDAOBgNVBAoMB2Jhb3ouY24xEDAO\n" +
    "BgNVBAMMB2Jhb3oubWUwggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQCI\n" +
    "BTAgnJYcSe6w40YNUKC5OvcWSRWhKIMnaaYVhiJu3WlpekiIQpDL47DKQVw4bQTD\n" +
    "1QYQS+95FBso35ulRXm4fqrumCd8O5sDZVItJPuUdxcl3ZqzgM3IUy2Bcs6PR1VK\n" +
    "Tg125aVWBjZ9S7XuwkkGbKxiMKOYHvo/3YMt8i+Uj7g5gQ4VItAIbnooDxm8/0dO\n" +
    "ceIjQud6uN/XhyOvVRuDDRx70own3osudmn1DqEEJdqVqAOj0yh+7JJykVfVfSLG\n" +
    "KtDZW2ibNO+V70Qh1+Zq3oSgvPHPxg1+XqaWW8JWuUUnDUO9d/EuWQNH0j617UHz\n" +
    "0vsSWO33RUEqbOOMmIqa6GZbweEkyl7dUEbu3xzcn4X9wkvHtkOTr9c2HFY9vMv1\n" +
    "I2FNGDrTXlgOxfTVsXKLUZQd0Whw+bOBnqfDdqcVPzn6ruX0zjIaFFBt9RZDitPT\n" +
    "MIWhsllB47hnKIEzR+4AaGWfQyiAh0VqiHvGZWCAvpfElU4CldcZXtnzEOPNsukE\n" +
    "jZQeJfxbfdlutdiIN7G98FC5HZIXDfvaH8sIX584jyTFmv0E1TVFJ/bpEJfQyLQV\n" +
    "1vPR55ctrc3jZ8YDEdhQI3kzhYS0A9x1CNABnuBn5WjL2c2MyhAxbPMfzhcdQjVv\n" +
    "IDxPv3kKdWYoyIfIJYSc4ZXWm2ZmvOhmhrrHps4e6QIDAQABoAAwDQYJKoZIhvcN\n" +
    "AQELBQADggIBABQJpGu/2a5uBBrCq74gwN+xdn+UvGTyTyrr67ddU3sLAMFiS980\n" +
    "17UwomPhLdhOkEcMmpi/YUuvagPd5KXCEEzCzJwx0EB3qXnlghD5J/CwYnL1YXFN\n" +
    "LXTfKTeKwsV+60uHTU+OH0ZWDpS25Bv83Ok3tRpyv9QGfcm2CmcPbbmfVR7gN5Wg\n" +
    "5OwaWduv2D3odUZOyy1ANGrHZpD0HIFIHlm0PxBtboxvG99IubsDPzORXLEYMs/U\n" +
    "E/ix9F2C//650kdRGPy6HEnaFWg8Clfty9GSZX7HoXqGmWELCm7l2DaQwAxP+zJ4\n" +
    "1unq2vXE/F8faNrUXkanODfLjkWYZFbnFWGARk4XW48Cr7Nzyp3iljTU0LynSdhS\n" +
    "bUccyOPDaVWsAJc/B4Ed3qf0mdDMuejqNwkEmJl6/jZL0SfkUOSeR15mxrIOr2GS\n" +
    "lcO94RQ0W830VQ+PKp7C6ZGtvSLd6xuZaQRTwKEjIuZyO1mqqGzOKgMfso6YZRPM\n" +
    "RqqZMuUYSDWWgBZxeugpTDu4MFFiXwL/LKe/aBHd3OwtQFZqnvxPfhwMsn4g+JxN\n" +
    "IgYhwpmIZ44ZnOcohcm7SBOtsNIixEJeGMInnYxJmkH+ix1zSB22JYSFweBzOQ24\n" +
    "2ojyVJc1FZSUL8gHRbcZn8eR13wdkzZ91uTpWCu94iTtU0+69S9m5qri\n" +
    "-----END CERTIFICATE REQUEST-----\n"

var sm2_req = "-----BEGIN CERTIFICATE REQUEST-----\n" +
    "MIHnMIGTAgEAMDExCzAJBgNVBAYTAkNOMRAwDgYDVQQKEwdiYW96LmNuMRAwDgYD\n" +
    "VQQDEwdiYW96Lm1lMFkwEwYHKoZIzj0CAQYIKoEcz1UBgi0DQgAE1KnIoMvdNODU\n" +
    "rcEzQNnHbplwxNNyuHwIUnU0oNQ/0R1z97YIe/k8HX6wrPMUazfS1PVd/A9R8gad\n" +
    "vlURQ3lufqAAMAwGCCqBHM9VAYN2BQADQQDzqeEAzhohe1R/chlIdKMFgWLmcZ52\n" +
    "9UImdf5/efmrsL6X6hZyKhGy6vypOr8FpwaRC98o9fOL41Gl8/MBr6vJ\n" +
    "-----END CERTIFICATE REQUEST-----\n"

var rsa_pub_key = "-----BEGIN RSA PUBLIC KEY-----\n" +
    "MIIBCgKCAQEAniqcAxl7LclB0kE6q9AcAd8EE+0W6AsriR9Fs9T+6QVXl8uiCiAb\n" +
    "h/KCyy8X8C2bHsFpNBvwGTqMwHbqZqWBVUvYRtfCFcy3Xmertb09DnOBeWqKS418\n" +
    "1kss97JDO6G07QNbuLSWwkkO82CHD1kUmeF5/dof0Ra6bsRXqppdo86NzlgFud+E\n" +
    "2s5BM3XwewZVSpA69bwEiXaRDhrsg5mqeOm68VyxE8LQu+895kKsBnTvTueZTrXT\n" +
    "+HNaIveoYe8+Lb7b/mZYtlhrDK0i/8EDox85vxnzKZ7wNswqqcDg6vfC2911phST\n" +
    "Ph13jv2FIOkjO/WHhHEzRnS2VQqivqIbsQIDAQAB\n" +
    "-----END RSA PUBLIC KEY-----";

var data = new Buffer([0x9b, 0x4c, 0x7b, 0xce, 0x7a, 0xbd, 0x0a, 0x13,
    0x61, 0xfb, 0x17, 0xc2, 0x06, 0x12, 0x0c, 0xed
]);

var art1 = "+-----[lion]------+\n" +
    "|    .+.          |\n" +
    "|      o.         |\n" +
    "|     .. +        |\n" +
    "|      Eo =       |\n" +
    "|        S + .    |\n" +
    "|       o B . .   |\n" +
    "|        B o..    |\n" +
    "|         *...    |\n" +
    "|        .o+...   |\n" +
    "+-----------------+\n";

var art2 = "+-----------------+\n" +
    "|    .+.          |\n" +
    "|      o.         |\n" +
    "|     .. +        |\n" +
    "|      Eo =       |\n" +
    "|        S + .    |\n" +
    "|       o B . .   |\n" +
    "|        B o..    |\n" +
    "|         *...    |\n" +
    "|        .o+...   |\n" +
    "+-----------------+\n";

var art3 = "+01234567890123456+\n" +
    "|    .+.          |\n" +
    "|      o.         |\n" +
    "|     .. +        |\n" +
    "|      Eo =       |\n" +
    "|        S + .    |\n" +
    "|       o B . .   |\n" +
    "|        B o..    |\n" +
    "|         *...    |\n" +
    "|        .o+...   |\n" +
    "+-----------------+\n";

describe('crypto', () => {

    it("randomBytes", () => {
        assert.notEqual(crypto.randomBytes(8).hex(), crypto.randomBytes(8).hex());

        assert.throws(() => {
            crypto.randomBytes(-125);
        });
    });

    it("randomFill", () => {
        var buf = Buffer.alloc(10);
        var before = buf.toString('hex');
        var buf1 = crypto.randomFill(buf, 5, 5);
        var after = buf.toString('hex');
        // assert.equal(buf, buf1);
        assert.notStrictEqual(before, after);

        crypto.randomFill(buf, 0);
        assert.throws(() => {
            crypto.randomFill(buf, -1);
        });

        crypto.randomFill(buf, 10);
        assert.throws(() => {
            crypto.randomFill(buf, 11);
        });

        crypto.randomFill(buf, 9, 1);
        assert.throws(() => {
            crypto.randomFill(buf, 9, 2);
        });
    });

    describe('createSecretKey', () => {
        it('normal', () => {
            const keybuf = crypto.randomBytes(32);
            const key = crypto.createSecretKey(keybuf);

            assert.strictEqual(key.type, 'secret');
            assert.strictEqual(key.toString(), '[object KeyObject]');
            assert.strictEqual(key.symmetricKeySize, 32);
            assert.strictEqual(key.asymmetricKeyType, undefined);
            assert.strictEqual(key.asymmetricKeyDetails, undefined);

            const exportedKey = key.export();
            assert.ok(keybuf.equals(exportedKey));
        });

        it('encoding', () => {
            const buffer = Buffer.from('Hello World');
            const key1 = crypto.createSecretKey(buffer);
            const key2 = crypto.createSecretKey('Hello World');

            assert.ok(key1.export().equals(key2.export()));
        });

        it('export', () => {
            const buffer = Buffer.from('Hello World');
            const keyObject = crypto.createSecretKey(buffer);
            assert.deepEqual(keyObject.export(), buffer);
            assert.deepEqual(keyObject.export({}), buffer);
            assert.deepEqual(keyObject.export({ format: 'buffer' }), buffer);
            assert.deepEqual(keyObject.export({ format: undefined }), buffer);
        });

        it('export jwk', () => {
            const buffer = Buffer.from('Hello World');
            const keyObject = crypto.createSecretKey(buffer);
            assert.deepEqual(
                keyObject.export({ format: 'jwk' }),
                { kty: 'oct', k: 'SGVsbG8gV29ybGQ' }
            );
        });

        it('equals', () => {
            const first = Buffer.from('Hello');
            const second = Buffer.from('World');

            const keyObject = crypto.createSecretKey(first);
            assert.ok(crypto.createSecretKey(first).equals(crypto.createSecretKey(first)));
            assert.ok(!crypto.createSecretKey(first).equals(crypto.createSecretKey(second)));

            assert.throws(() => keyObject.equals(0));

            assert.ok(keyObject.equals(keyObject));
        });

        it('equals with empty key', () => {
            const first = crypto.createSecretKey(Buffer.alloc(0));
            const second = crypto.createSecretKey(new ArrayBuffer(0));
            const third = crypto.createSecretKey(Buffer.alloc(1));
            assert.ok(first.equals(first));
            assert.ok(first.equals(second));
            assert.ok(!first.equals(third));
            assert.ok(!third.equals(first));
        });
    });

    describe('Cipher', () => {
        function test_cipher(provider, file) {
            it(file, () => {
                var cases = encoding.json.decode(fs.readTextFile(path.join(__dirname, "crypto_case", file + ".json")));

                cases.forEach((item) => {
                    var c;
                    var mode = crypto[item[2]];

                    if (item.length == 7)
                        c = new crypto.Cipher(provider, mode,
                            hex.decode(item[3]), hex.decode(item[6]));
                    else if (item.length == 6)
                        c = new crypto.Cipher(provider, mode,
                            hex.decode(item[3]));

                    if (mode == crypto.CBC)
                        c.paddingMode(crypto.NOPADDING);
                    assert.equal(c[item[1]](hex.decode(item[4])).hex(), item[5]);
                });

            });
        }

        describe('AES', () => {
            test_cipher(crypto.AES, "aes.cbc");
            test_cipher(crypto.AES, "aes.cfb");
            test_cipher(crypto.AES, "aes.ecb");
            // test_cipher(crypto.AES, "aes.xts");
        });

        test_cipher(crypto.DES, "des");
        test_cipher(crypto.DES_EDE3, "des_ede3");
        test_cipher(crypto.CAMELLIA, "camellia");
        test_cipher(crypto.SM4, "sm4");

        // test_cipher(crypto.ARIA, "aria");

        it('DES bug fix', () => {
            let passwd = "vio7t449";
            let key = "5KLPqC7pAUUfL";
            let cipher = new crypto.Cipher(crypto.DES, crypto.CBC, new Buffer(passwd));
            let encrypted = cipher.encrypt(new Buffer(key)).hex();

            assert.equal(key, cipher.decrypt(new Buffer(encrypted, "hex")).toString("utf8"));
        });

        describe("cipher/decipher", () => {
            it("normal", () => {
                function testCipher1(key) {
                    const plaintext = 'Keep this a secret? No! Tell everyone about node.js!';
                    const cipher = crypto.createCipher('aes192', key);

                    let ciph = cipher.update(plaintext, 'utf8', 'hex');
                    ciph += cipher.final('hex');

                    const decipher = crypto.createDecipher('aes192', key);
                    let txt = decipher.update(ciph, 'hex', 'utf8');
                    txt += decipher.final('utf8');

                    assert.equal(txt, plaintext);
                }

                testCipher1('MySecretKey123');
                testCipher1(Buffer.from('MySecretKey123'));
            });

            it("encoding", () => {
                function testCipher2(key) {
                    const plaintext =
                        '32|RmVZZkFUVmpRRkp0TmJaUm56ZU9qcnJkaXNNWVNpTTU*|iXmckfRWZBGWWELw' +
                        'eCBsThSsfUHLeRe0KCsK8ooHgxie0zOINpXxfZi/oNG7uq9JWFVCk70gfzQH8ZUJ' +
                        'jAfaFg**';
                    const cipher = crypto.createCipher('aes256', key);

                    let ciph = cipher.update(plaintext, 'utf8', 'base64');
                    ciph += cipher.final('base64');

                    const decipher = crypto.createDecipher('aes256', key);
                    let txt = decipher.update(ciph, 'base64', 'utf8');
                    txt += decipher.final('utf8');

                    assert.equal(txt, plaintext);
                }

                testCipher2('0123456789abcdef');
                testCipher2(Buffer.from('0123456789abcdef'));
            });

            it("check arguments", () => {
                assert.throws(() => crypto.createCipher(null));
                assert.throws(() => crypto.createCipher('aes-256-cbc', null));
                assert.throws(() => crypto.createCipher('aes-256-cbc', 'secret').setAAD(null));

                assert.throws(() => crypto.createDecipher(null));
                assert.throws(() => crypto.createDecipher('aes-256-cbc', 'secret').setAuthTag(null));
                assert.throws(() => crypto.createDecipher('aes-256-cbc', null));
            });

            it("base64 padding regression", () => {
                const c = crypto.createCipher('aes-256-cbc', 'secret');
                const s = c.update('test', 'utf8', 'base64') + c.final('base64');
                assert.equal(s, '375oxUQCIocvxmC5At+rvA==');
            });

            it("calling final() twice", () => {
                const c = crypto.createCipher('aes-256-cbc', 'secret');
                assert.throws(() => c.final('xxx'));
                assert.throws(() => c.final('xxx'));
                assert.throws(() => c.final('xxx'));

                const d = crypto.createDecipher('aes-256-cbc', 'secret');
                assert.throws(() => d.final('xxx'));
                assert.throws(() => d.final('xxx'));
                assert.throws(() => d.final('xxx'));
            });

            it("utf8 encoding", () => {
                let c = crypto.createCipher('aes192', '0123456789abcdef');
                c.update('update', '');  // Defaults to "utf8".
                c.final('utf-8');  // Should not throw.

                c = crypto.createCipher('aes192', '0123456789abcdef');
                c.update('update', 'utf8');
                c.final('utf-8');  // Should not throw.

                c = crypto.createCipher('aes192', '0123456789abcdef');
                c.update('update', 'utf-8');
                c.final('utf8');  // Should not throw.              
            });

            it("ucs2 encoding", () => {
                const key = '0123456789abcdef';
                const plaintext = 'Top secret!!!';
                const c = crypto.createCipher('aes192', key);
                let ciph = c.update(plaintext, 'utf16le', 'base64');
                ciph += c.final('base64');

                let decipher = crypto.createDecipher('aes192', key);

                let txt;
                txt = decipher.update(ciph, 'base64', 'ucs2');
                txt += decipher.final('ucs2');
                assert.equal(txt, plaintext);

                decipher = crypto.createDecipher('aes192', key);
                txt = decipher.update(ciph, 'base64', 'ucs-2');
                txt += decipher.final('ucs-2');
                assert.equal(txt, plaintext);

                decipher = crypto.createDecipher('aes192', key);
                txt = decipher.update(ciph, 'base64', 'utf-16le');
                txt += decipher.final('utf-16le');
                assert.equal(txt, plaintext);
            });

            it("result for setAutoPadding/setAuthTag/setAAD", () => {
                const key = '0123456789';
                const tagbuf = Buffer.from('auth_tag');
                const aadbuf = Buffer.from('aadbuf');
                const decipher = crypto.createDecipher('aes-256-gcm', key);
                assert.equal(decipher.setAutoPadding(), decipher);
                assert.equal(decipher.setAuthTag(tagbuf), decipher);
                assert.equal(decipher.setAAD(aadbuf), decipher);
            });

            it("Error throwing in setAAD/setAuthTag/getAuthTag/setAutoPadding", () => {
                const key = '0123456789';
                const aadbuf = Buffer.from('aadbuf');
                const data = Buffer.from('test-crypto-cipher-decipher');

                const cipher = crypto.createCipher('aes-256-gcm', key);
                cipher.setAAD(aadbuf);
                cipher.setAutoPadding();

                assert.throws(() => cipher.getAuthTag());

                const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

                const decipher = crypto.createDecipher('aes-256-gcm', key);
                decipher.setAAD(aadbuf);
                decipher.setAuthTag(cipher.getAuthTag());
                decipher.setAutoPadding();
                decipher.update(encrypted);
                decipher.final();

                assert.throws(() => decipher.setAAD(aadbuf));
                assert.throws(() => decipher.setAuthTag(cipher.getAuthTag()));
                assert.throws(() => decipher.setAutoPadding());
            });
        });

        describe("cipheriv/decipheriv", () => {
            it("key and iv", () => {
                function testCipher1(key, iv) {
                    const plaintext =
                        '32|RmVZZkFUVmpRRkp0TmJaUm56ZU9qcnJkaXNNWVNpTTU*|iXmckfRWZBGWWELw' +
                        'eCBsThSsfUHLeRe0KCsK8ooHgxie0zOINpXxfZi/oNG7uq9JWFVCk70gfzQH8ZUJ' +
                        'jAfaFg**';
                    const cipher = crypto.createCipheriv('des-ede3-cbc', key, iv);
                    let ciph = cipher.update(plaintext, 'utf8', 'hex');
                    ciph += cipher.final('hex');

                    const decipher = crypto.createDecipheriv('des-ede3-cbc', key, iv);
                    let txt = decipher.update(ciph, 'hex', 'utf8');
                    txt += decipher.final('utf8');

                    assert.equal(txt, plaintext);
                }

                function testCipher2(key, iv) {
                    // Test encryption and decryption with explicit key and iv
                    const plaintext =
                        '32|RmVZZkFUVmpRRkp0TmJaUm56ZU9qcnJkaXNNWVNpTTU*|iXmckfRWZBGWWELw' +
                        'eCBsThSsfUHLeRe0KCsK8ooHgxie0zOINpXxfZi/oNG7uq9JWFVCk70gfzQH8ZUJ' +
                        'jAfaFg**';
                    const cipher = crypto.createCipheriv('des-ede3-cbc', key, iv);
                    let ciph = cipher.update(plaintext, 'utf8', 'buffer');
                    ciph = Buffer.concat([ciph, cipher.final('buffer')]);

                    const decipher = crypto.createDecipheriv('des-ede3-cbc', key, iv);
                    let txt = decipher.update(ciph, 'buffer', 'utf8');
                    txt += decipher.final('utf8');

                    assert.equal(txt, plaintext);
                }

                testCipher1('0123456789abcd0123456789', '12345678');
                testCipher1('0123456789abcd0123456789', Buffer.from('12345678'));
                testCipher1(Buffer.from('0123456789abcd0123456789'), '12345678');
                testCipher1(Buffer.from('0123456789abcd0123456789'), Buffer.from('12345678'));
                testCipher2(Buffer.from('0123456789abcd0123456789'), Buffer.from('12345678'));
                testCipher2(crypto.createSecretKey(Buffer.from('0123456789abcd0123456789')), Buffer.from('12345678'));
            });

            it("check arguments", () => {
                assert.throws(() => crypto.createCipheriv(null));
                assert.throws(() => crypto.createCipheriv('des-ede3-cbc', null));
                assert.throws(() => crypto.createCipheriv('des-ede3-cbc', key, 10));

                assert.throws(() => crypto.createDecipheriv(null));
                assert.throws(() => crypto.createDecipheriv('des-ede3-cbc', null));
                assert.throws(() => crypto.createDecipheriv('des-ede3-cbc', key, 10));
            });

            it("iv size", () => {
                crypto.createCipheriv('aes-128-ecb', Buffer.alloc(16), Buffer.alloc(0));
                for (let n = 1; n < 256; n += 1)
                    assert.throws(() => crypto.createCipheriv('aes-128-ecb', Buffer.alloc(16),
                        Buffer.alloc(n)));
            });

            it("iv in cbc", () => {
                crypto.createCipheriv('aes-128-cbc', Buffer.alloc(16), Buffer.alloc(16));
                for (let n = 0; n < 256; n += 1) {
                    if (n === 16) continue;
                    assert.throws(() => crypto.createCipheriv('aes-128-cbc', Buffer.alloc(16),
                        Buffer.alloc(n)));
                }
            });

            it("iv in gcm mode", () => {
                assert.throws(() => crypto.createCipheriv('aes-128-gcm', Buffer.alloc(16),
                    Buffer.alloc(0)));

                const minIvLength = 8;
                const maxIvLength = 64;
                for (let n = minIvLength; n < maxIvLength; n += 1)
                    crypto.createCipheriv('aes-128-gcm', Buffer.alloc(16), Buffer.alloc(n));
            });

            it("invalid cipher name", () => {
                assert.throws(() => crypto.createCipheriv('aes-127', Buffer.alloc(16), null));
                assert.throws(() => crypto.createCipheriv('aes-128-ecb', Buffer.alloc(17), null));
            });
        });

        describe("authenticated", () => {
            const TEST_CASES = require('../test/crypto_case/aead-vectors.js');
            const ciphers = crypto.getCiphers();

            it("authenticated test", () => {
                for (const test of TEST_CASES) {
                    if (!ciphers.includes(test.algo)) {
                        common.printSkipMessage(`unsupported ${test.algo} test`);
                        continue;
                    }

                    const isCCM = /^aes-(128|192|256)-ccm$/.test(test.algo);
                    const isOCB = /^aes-(128|192|256)-ocb$/.test(test.algo);

                    let options;
                    if (isCCM || isOCB)
                        options = { authTagLength: test.tag.length / 2 };

                    const inputEncoding = test.plainIsHex ? 'hex' : 'ascii';

                    let aadOptions;
                    if (isCCM) {
                        aadOptions = {
                            plaintextLength: Buffer.from(test.plain, inputEncoding).length
                        };
                    }

                    {
                        const encrypt = crypto.createCipheriv(test.algo,
                            Buffer.from(test.key, 'hex'),
                            Buffer.from(test.iv, 'hex'),
                            options);

                        if (test.aad)
                            encrypt.setAAD(Buffer.from(test.aad, 'hex'), aadOptions);

                        let hex = encrypt.update(test.plain, inputEncoding, 'hex');
                        hex += encrypt.final('hex');

                        const auth_tag = encrypt.getAuthTag();
                        // Only test basic encryption run if output is marked as tampered.
                        if (!test.tampered) {
                            assert.equal(hex, test.ct);
                            assert.equal(auth_tag.toString('hex'), test.tag);
                        }
                    }

                    {
                        const decrypt = crypto.createDecipheriv(test.algo,
                            Buffer.from(test.key, 'hex'),
                            Buffer.from(test.iv, 'hex'),
                            options);
                        decrypt.setAuthTag(Buffer.from(test.tag, 'hex'));
                        if (test.aad)
                            decrypt.setAAD(Buffer.from(test.aad, 'hex'), aadOptions);

                        const outputEncoding = test.plainIsHex ? 'hex' : 'ascii';

                        let msg = decrypt.update(test.ct, 'hex', outputEncoding);
                        if (!test.tampered) {
                            msg += decrypt.final(outputEncoding);
                            assert.equal(msg, test.plain);
                        } else {
                            // Assert that final throws if input data could not be verified!
                            assert.throws(function () { decrypt.final('hex'); });
                        }
                    }

                    if (test.password) {
                        const encrypt = crypto.createCipher(test.algo, test.password, options);
                        if (test.aad)
                            encrypt.setAAD(Buffer.from(test.aad, 'hex'), aadOptions);
                        let hex = encrypt.update(test.plain, 'ascii', 'hex');
                        hex += encrypt.final('hex');
                        const auth_tag = encrypt.getAuthTag();
                        // Only test basic encryption run if output is marked as tampered.
                        if (!test.tampered) {
                            assert.equal(hex, test.ct);
                            assert.equal(auth_tag.toString('hex'), test.tag);
                        }
                    }

                    if (test.password) {
                        const decrypt = crypto.createDecipher(test.algo, test.password, options);
                        decrypt.setAuthTag(Buffer.from(test.tag, 'hex'));
                        if (test.aad)
                            decrypt.setAAD(Buffer.from(test.aad, 'hex'), aadOptions);
                        let msg = decrypt.update(test.ct, 'hex', 'ascii');
                        if (!test.tampered) {
                            msg += decrypt.final('ascii');
                            assert.equal(msg, test.plain);
                        } else {
                            // Assert that final throws if input data could not be verified!
                            assert.throws(function () { decrypt.final('ascii'); });
                        }
                    }

                    {
                        // Trying to get tag before inputting all data:
                        const encrypt = crypto.createCipheriv(test.algo,
                            Buffer.from(test.key, 'hex'),
                            Buffer.from(test.iv, 'hex'),
                            options);
                        encrypt.update('blah', 'ascii');
                        assert.throws(function () { encrypt.getAuthTag(); });
                    }

                    {
                        // Trying to create cipher with incorrect IV length
                        assert.throws(function () {
                            crypto.createCipheriv(
                                test.algo,
                                Buffer.from(test.key, 'hex'),
                                Buffer.alloc(0)
                            );
                        });
                    }
                }
            });

            it("non-authenticating", () => {
                const encrypt = crypto.createCipheriv('aes-128-cbc',
                    'ipxp9a6i1Mb4USb4', '6fKjEjR3Vl30EUYC');
                encrypt.update('blah', 'ascii');
                encrypt.final();
                assert.throws(() => encrypt.getAuthTag());
                assert.throws(() => encrypt.setAAD(Buffer.from('123', 'ascii')));
            });

            describe("GCM mode", () => {
                it("specific authentication tag lengths", () => {
                    for (const length of [0, 1, 2, 6, 9, 10, 11, 17]) {
                        assert.throws(() => {
                            const decrypt = crypto.createDecipheriv('aes-128-gcm',
                                'FxLKsqdmv0E9xrQh',
                                'qkuZpJWCewa6Szih');
                            decrypt.setAuthTag(Buffer.from('1'.repeat(length)));
                        });

                        assert.throws(() => {
                            crypto.createCipheriv('aes-256-gcm',
                                'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8',
                                'qkuZpJWCewa6Szih',
                                {
                                    authTagLength: length
                                });
                        });

                        assert.throws(() => {
                            crypto.createDecipheriv('aes-256-gcm',
                                'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8',
                                'qkuZpJWCewa6Szih',
                                {
                                    authTagLength: length
                                });
                        });
                    }
                });

                it("shorter authentication tags", () => {
                    const fullTag = '1debb47b2c91ba2cea16fad021703070';
                    for (const [authTagLength, e] of [[undefined, 16], [12, 12], [4, 4]]) {
                        const cipher = crypto.createCipheriv('aes-256-gcm',
                            'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8', 'qkuZpJWCewa6Szih', {
                            authTagLength
                        });
                        cipher.setAAD(Buffer.from('abcd'));
                        cipher.update('01234567', 'hex');
                        cipher.final();
                        const tag = cipher.getAuthTag();
                        assert.equal(tag.toString('hex'), fullTag.substr(0, 2 * e));
                    }
                });

                it("manually restrict tag length", () => {
                    const decipher = crypto.createDecipheriv('aes-256-gcm',
                        'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8', 'qkuZpJWCewa6Szih', {
                        authTagLength: 8
                    });

                    assert.throws(() => {
                        // This tag would normally be allowed.
                        decipher.setAuthTag(Buffer.from('1'.repeat(12)));
                    });

                    // The Decipher object should be left intact.
                    decipher.setAuthTag(Buffer.from('445352d3ff85cf94', 'hex'));
                    const text = Buffer.concat([
                        decipher.update('3a2a3647', 'hex'),
                        decipher.final(),
                    ]);
                    assert.equal(text.toString('utf8'), 'node');
                });
            });

            it("invalid authentication tag length in CCM mode", () => {
                for (const authTagLength of [-1, true, false, NaN, 5.5]) {
                    assert.throws(() => {
                        crypto.createCipheriv('aes-256-ccm',
                            'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8',
                            'qkuZpJWCewa6S',
                            {
                                authTagLength
                            });
                    });

                    assert.throws(() => {
                        crypto.createDecipheriv('aes-256-ccm',
                            'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8',
                            'qkuZpJWCewa6S',
                            {
                                authTagLength
                            });
                    });

                    assert.throws(() => {
                        crypto.createCipher('aes-256-ccm', 'bad password', { authTagLength });
                    });

                    assert.throws(() => {
                        crypto.createDecipher('aes-256-ccm', 'bad password', { authTagLength });
                    });
                }

                for (const authTagLength of [0, 1, 2, 3, 5, 7, 9, 11, 13, 15, 17, 18]) {
                    assert.throws(() => {
                        crypto.createCipheriv('aes-256-ccm',
                            'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8',
                            'qkuZpJWCewa6S',
                            {
                                authTagLength
                            });
                    });

                    assert.throws(() => {
                        crypto.createDecipheriv('aes-256-ccm',
                            'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8',
                            'qkuZpJWCewa6S',
                            {
                                authTagLength
                            });
                    });

                    assert.throws(() => {
                        crypto.createCipher('aes-256-ccm', 'bad password', { authTagLength });
                    });

                    assert.throws(() => {
                        crypto.createDecipher('aes-256-ccm', 'bad password', { authTagLength });
                    });
                }
            });

            it("no authentication tag in CCM and OCB mode", () => {
                for (const mode of ['ccm', 'ocb']) {
                    assert.throws(() => {
                        crypto.createCipheriv(`aes-256-${mode}`,
                            'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8',
                            'qkuZpJWCewa6S');
                    }, {
                        message: `authTagLength required for aes-256-${mode}`
                    });

                    // CCM decryption and create(De|C)ipher are unsupported in FIPS mode.
                    assert.throws(() => {
                        crypto.createDecipheriv(`aes-256-${mode}`,
                            'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8',
                            'qkuZpJWCewa6S');
                    }, {
                        message: `authTagLength required for aes-256-${mode}`
                    });

                    assert.throws(() => {
                        crypto.createCipher(`aes-256-${mode}`, 'very bad password');
                    }, {
                        message: `authTagLength required for aes-256-${mode}`
                    });

                    assert.throws(() => {
                        crypto.createDecipher(`aes-256-${mode}`, 'very bad password');
                    }, {
                        message: `authTagLength required for aes-256-${mode}`
                    });
                }
            });

            describe("setAAD", () => {
                it("invalid plaintext length", () => {
                    const cipher = crypto.createCipheriv('aes-256-ccm',
                        'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8',
                        'qkuZpJWCewa6S',
                        {
                            authTagLength: 10
                        });

                    for (const plaintextLength of [-1, true, false, NaN]) {
                        assert.throws(() => {
                            cipher.setAAD(Buffer.from('0123456789', 'hex'), { plaintextLength });
                        });
                    }
                });

                it("plaintext is too long", () => {
                    for (const ivLength of [13, 12]) {
                        const maxMessageSize = (1 << (8 * (15 - ivLength))) - 1;
                        const key = 'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8';
                        const cipher = () => crypto.createCipheriv('aes-256-ccm', key,
                            '0'.repeat(ivLength),
                            {
                                authTagLength: 10
                            });

                        assert.throws(() => {
                            cipher().setAAD(Buffer.alloc(0), {
                                plaintextLength: maxMessageSize + 1
                            });
                        }, /Invalid message length$/);

                        const msg = Buffer.alloc(maxMessageSize + 1);
                        assert.throws(() => {
                            cipher().update(msg);
                        }, /Invalid message length/);

                        const c = cipher();
                        c.setAAD(Buffer.alloc(0), {
                            plaintextLength: maxMessageSize
                        });
                        c.update(msg.slice(1));
                    }
                });

                it("plaintext length has not been specified in CCM mode", () => {
                    assert.throws(() => {
                        const cipher = crypto.createCipheriv('aes-256-ccm',
                            'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8',
                            'qkuZpJWCewa6S',
                            {
                                authTagLength: 10
                            });
                        cipher.setAAD(Buffer.from('0123456789', 'hex'));
                    });

                    assert.throws(() => {
                        const cipher = crypto.createDecipheriv('aes-256-ccm',
                            'FxLKsqdmv0E9xrQhp0b1ZgI0K7JFZJM8',
                            'qkuZpJWCewa6S',
                            {
                                authTagLength: 10
                            });
                        cipher.setAAD(Buffer.from('0123456789', 'hex'));
                    });
                });

                it("final() throws in CCM mode when no authentication tag is provided", () => {
                    const key = Buffer.from('1ed2233fa2223ef5d7df08546049406c', 'hex');
                    const iv = Buffer.from('7305220bca40d4c90e1791e9', 'hex');
                    const ct = Buffer.from('8beba09d4d4d861f957d51c0794f4abf8030848e', 'hex');
                    const decrypt = crypto.createDecipheriv('aes-128-ccm', key, iv, {
                        authTagLength: 10
                    });

                    assert.throws(() => {
                        decrypt.setAAD(Buffer.from('63616c76696e', 'hex'), {
                            plaintextLength: ct.length
                        });
                        decrypt.update(ct);
                        decrypt.final();
                    });
                });

                it("setAuthTag does not throw in GCM mode when called after setAAD", () => {
                    const key = Buffer.from('1ed2233fa2223ef5d7df08546049406c', 'hex');
                    const iv = Buffer.from('579d9dfde9cd93d743da1ceaeebb86e4', 'hex');
                    const decrypt = crypto.createDecipheriv('aes-128-gcm', key, iv);
                    decrypt.setAAD(Buffer.from('0123456789', 'hex'));
                    decrypt.setAuthTag(Buffer.from('1bb9253e250b8069cde97151d7ef32d9', 'hex'));
                    assert.equal(decrypt.update('807022', 'hex', 'hex'), 'abcdef');
                    assert.equal(decrypt.final('hex'), '');
                });
            });

            it("IV length of 11 does not overflow max_message_size_", () => {
                const key = 'x'.repeat(16);
                const iv = Buffer.from('112233445566778899aabb', 'hex');
                const options = { authTagLength: 8 };
                const encrypt = crypto.createCipheriv('aes-128-ccm', key, iv, options);
                encrypt.update('boom');  // Should not throw 'Message exceeds maximum size'.
                encrypt.final();
            });

            it("authentication tag can be set at any point before final()", () => {
                const plain = Buffer.from('Hello world', 'utf8');
                const key = Buffer.from('0123456789abcdef', 'utf8');
                const iv = Buffer.from('0123456789ab', 'utf8');

                for (const mode of ['gcm', 'ocb']) {
                    for (const authTagLength of mode === 'gcm' ? [undefined, 8] : [8]) {
                        const cipher = crypto.createCipheriv(`aes-128-${mode}`, key, iv, {
                            authTagLength
                        });
                        const ciphertext = Buffer.concat([cipher.update(plain), cipher.final()]);
                        const authTag = cipher.getAuthTag();

                        for (const authTagBeforeUpdate of [true, false]) {
                            const decipher = crypto.createDecipheriv(`aes-128-${mode}`, key, iv, {
                                authTagLength
                            });
                            if (authTagBeforeUpdate) {
                                decipher.setAuthTag(authTag);
                            }
                            const resultUpdate = decipher.update(ciphertext);
                            if (!authTagBeforeUpdate) {
                                decipher.setAuthTag(authTag);
                            }
                            const resultFinal = decipher.final();
                            const result = Buffer.concat([resultUpdate, resultFinal]);
                            assert.deepEqual(result, plain);
                        }
                    }
                }
            });

            it("setAuthTag can only be called once", () => {
                const plain = Buffer.from('Hello world', 'utf8');
                const key = Buffer.from('0123456789abcdef', 'utf8');
                const iv = Buffer.from('0123456789ab', 'utf8');
                const opts = { authTagLength: 8 };

                for (const mode of ['gcm', 'ccm', 'ocb']) {
                    const cipher = crypto.createCipheriv(`aes-128-${mode}`, key, iv, opts);
                    const ciphertext = Buffer.concat([cipher.update(plain), cipher.final()]);
                    const tag = cipher.getAuthTag();

                    const decipher = crypto.createDecipheriv(`aes-128-${mode}`, key, iv, opts);
                    decipher.setAuthTag(tag);
                    assert.throws(() => {
                        decipher.setAuthTag(tag);
                    });
                    // Decryption should still work.
                    const plaintext = Buffer.concat([
                        decipher.update(ciphertext),
                        decipher.final(),
                    ]);
                    assert.deepEqual(plain, plaintext);
                }
            });

            describe("chacha20-poly1305", () => {
                it("rejects invalid IV lengths", () => {
                    const valid = {
                        algo: 'chacha20-poly1305',
                        key: '808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9f',
                        iv: '070000004041424344454647',
                        plain: '4c616469657320616e642047656e746c656d656e206f662074686520636c6173' +
                            '73206f66202739393a204966204920636f756c64206f6666657220796f75206f' +
                            '6e6c79206f6e652074697020666f7220746865206675747572652c2073756e73' +
                            '637265656e20776f756c642062652069742e',
                        plainIsHex: true,
                        aad: '50515253c0c1c2c3c4c5c6c7',
                        ct: 'd31a8d34648e60db7b86afbc53ef7ec2a4aded51296e08fea9e2b5' +
                            'a736ee62d63dbea45e8ca9671282fafb69da92728b1a71de0a9e06' +
                            '0b2905d6a5b67ecd3b3692ddbd7f2d778b8c9803aee328091b58fa' +
                            'b324e4fad675945585808b4831d7bc3ff4def08e4b7a9de576d265' +
                            '86cec64b6116',
                        tag: '1ae10b594f09e26a7e902ecbd0600691',
                        tampered: false,
                    };

                    // Invalid IV lengths should be detected:
                    // - 12 and below are valid.
                    // - 13-16 are not detected as invalid by some OpenSSL versions.
                    check(13);
                    check(14);
                    check(15);
                    check(16);
                    // - 17 and above were always detected as invalid by OpenSSL.
                    check(17);

                    function check(ivLength) {
                        const prefix = ivLength - valid.iv.length / 2;
                        assert.throws(() => crypto.createCipheriv(
                            valid.algo,
                            Buffer.from(valid.key, 'hex'),
                            Buffer.from(H(prefix) + valid.iv, 'hex')
                        ));

                        function H(length) { return '00'.repeat(length); }
                    }

                    const key = Buffer.alloc(32);
                    const iv = Buffer.alloc(12);

                    for (const authTagLength of [0, 17]) {
                        assert.throws(() => {
                            crypto.createCipheriv('chacha20-poly1305', key, iv, { authTagLength });
                        });
                    }
                });

                it("respect the authTagLength option and should not require the authentication tag before calls to update() during decryption", () => {
                    const key = Buffer.alloc(32);
                    const iv = Buffer.alloc(12);

                    for (let authTagLength = 1; authTagLength <= 16; authTagLength++) {
                        const cipher =
                            crypto.createCipheriv('chacha20-poly1305', key, iv, { authTagLength });
                        const ciphertext = Buffer.concat([cipher.update('foo'), cipher.final()]);
                        const authTag = cipher.getAuthTag();
                        assert.equal(authTag.length, authTagLength);

                        // The decipher operation should reject all authentication tags other than
                        // that of the expected length.
                        for (let other = 1; other <= 16; other++) {
                            const decipher = crypto.createDecipheriv('chacha20-poly1305', key, iv, {
                                authTagLength: other
                            });
                            // ChaCha20 is a stream cipher so we do not need to call final() to obtain
                            // the full plaintext.
                            const plaintext = decipher.update(ciphertext);
                            assert.equal(plaintext.toString(), 'foo');
                            if (other === authTagLength) {
                                // The authentication tag length is as expected and the tag itself is
                                // correct, so this should work.
                                decipher.setAuthTag(authTag);
                                decipher.final();
                            } else {
                                // The authentication tag that we are going to pass to setAuthTag is
                                // either too short or too long. If other < authTagLength, the
                                // authentication tag is still correct, but it should still be rejected
                                // because its security assurance is lower than expected.
                                assert.throws(() => {
                                    decipher.setAuthTag(authTag);
                                }, {
                                    code: 'ERR_CRYPTO_INVALID_AUTH_TAG',
                                    message: `Invalid authentication tag length: ${authTagLength}`
                                });
                            }
                        }
                    }
                });

                it("default to an authTagLength of 16", () => {
                    const rfcTestCases = TEST_CASES.filter(({ algo, tampered }) => {
                        return algo === 'chacha20-poly1305' && tampered === false;
                    });
                    assert.equal(rfcTestCases.length, 1);

                    const [testCase] = rfcTestCases;
                    const key = Buffer.from(testCase.key, 'hex');
                    const iv = Buffer.from(testCase.iv, 'hex');
                    const aad = Buffer.from(testCase.aad, 'hex');

                    for (const opt of [
                        undefined,
                        { authTagLength: undefined },
                        { authTagLength: 16 },
                    ]) {
                        const cipher = crypto.createCipheriv('chacha20-poly1305', key, iv, opt);
                        const ciphertext = Buffer.concat([
                            cipher.setAAD(aad).update(testCase.plain, 'hex'),
                            cipher.final(),
                        ]);
                        const authTag = cipher.getAuthTag();

                        assert.equal(ciphertext.toString('hex'), testCase.ct);
                        assert.equal(authTag.toString('hex'), testCase.tag);

                        const decipher = crypto.createDecipheriv('chacha20-poly1305', key, iv, opt);
                        const plaintext = Buffer.concat([
                            decipher.setAAD(aad).update(ciphertext),
                            decipher.setAuthTag(authTag).final(),
                        ]);

                        assert.equal(plaintext.toString('hex'), testCase.plain);
                    }
                });

                it("without setting authTag on decypher", () => {
                    const rfcTestCases = TEST_CASES.filter(({ algo, tampered }) => {
                        return algo === 'chacha20-poly1305' && tampered === false;
                    });
                    assert.equal(rfcTestCases.length, 1);

                    const [testCase] = rfcTestCases;
                    const key = Buffer.from(testCase.key, 'hex');
                    const iv = Buffer.from(testCase.iv, 'hex');
                    const aad = Buffer.from(testCase.aad, 'hex');
                    const opt = { authTagLength: 16 };

                    const cipher = crypto.createCipheriv('chacha20-poly1305', key, iv, opt);
                    const ciphertext = Buffer.concat([
                        cipher.setAAD(aad).update(testCase.plain, 'hex'),
                        cipher.final(),
                    ]);
                    const authTag = cipher.getAuthTag();

                    assert.equal(ciphertext.toString('hex'), testCase.ct);
                    assert.equal(authTag.toString('hex'), testCase.tag);

                    const decipher = crypto.createDecipheriv('chacha20-poly1305', key, iv, opt);
                    decipher.setAAD(aad).update(ciphertext);

                    assert.throws(() => {
                        decipher.final();
                    });
                });
            });

            it("CCM cipher without data should not crash", () => {
                const algo = 'aes-128-ccm';
                const key = Buffer.alloc(16);
                const iv = Buffer.alloc(12);
                const opts = { authTagLength: 10 };

                for (const cipher of [
                    crypto.createCipher(algo, 'foo', opts),
                    crypto.createCipheriv(algo, key, iv, opts),
                ]) {
                    assert.throws(() => {
                        cipher.final();
                    });
                }
            });
        });

        it("padding", () => {
            // Input data.
            const ODD_LENGTH_PLAIN = 'Hello node world!';
            const EVEN_LENGTH_PLAIN = 'Hello node world!AbC09876dDeFgHi';

            const KEY_PLAIN = 'S3c.r.e.t.K.e.Y!';
            const IV_PLAIN = 'blahFizz2011Buzz';

            const CIPHER_NAME = 'aes-128-cbc';

            const ODD_LENGTH_ENCRYPTED = '7f57859550d4d2fdb9806da2a750461a9fe77253cd1cbd4b07beee4e070d561f';

            const EVEN_LENGTH_ENCRYPTED = '7f57859550d4d2fdb9806da2a750461ab46e71b3d78ebe2d9684dfc87f7575b988' +
                '6119866912cb8c7bcaf76c5ebc2378';

            const EVEN_LENGTH_ENCRYPTED_NOPAD = '7f57859550d4d2fdb9806da2a750461ab46e71b3d78ebe2d9684dfc87f7575b9';

            function enc(plain, pad) {
                const encrypt = crypto.createCipheriv(CIPHER_NAME, KEY_PLAIN, IV_PLAIN);
                encrypt.setAutoPadding(pad);
                let hex = encrypt.update(plain, 'ascii', 'hex');
                hex += encrypt.final('hex');
                return hex;
            }

            function dec(encd, pad) {
                const decrypt = crypto.createDecipheriv(CIPHER_NAME, KEY_PLAIN, IV_PLAIN);
                decrypt.setAutoPadding(pad);
                let plain = decrypt.update(encd, 'hex');
                plain += decrypt.final('latin1');
                return plain;
            }

            assert.equal(enc(ODD_LENGTH_PLAIN, true), ODD_LENGTH_ENCRYPTED);
            assert.equal(enc(EVEN_LENGTH_PLAIN, true), EVEN_LENGTH_ENCRYPTED);

            assert.throws(function () {
                enc(ODD_LENGTH_PLAIN, false);
            });

            assert.equal(enc(EVEN_LENGTH_PLAIN, false), EVEN_LENGTH_ENCRYPTED_NOPAD);

            assert.equal(dec(ODD_LENGTH_ENCRYPTED, true), ODD_LENGTH_PLAIN);
            assert.equal(dec(EVEN_LENGTH_ENCRYPTED, true), EVEN_LENGTH_PLAIN);

            assert.equal(dec(ODD_LENGTH_ENCRYPTED, false).length, 32);
            assert.equal(dec(EVEN_LENGTH_ENCRYPTED, false).length, 48);

            assert.throws(function () {
                assert.equal(dec(EVEN_LENGTH_ENCRYPTED_NOPAD, true), EVEN_LENGTH_PLAIN);
            });

            assert.equal(dec(EVEN_LENGTH_ENCRYPTED_NOPAD, false), EVEN_LENGTH_PLAIN);
        });

        it("padding in aes256", () => {
            const iv = Buffer.from('00000000000000000000000000000000', 'hex');
            const key = Buffer.from('0123456789abcdef0123456789abcdef' +
                '0123456789abcdef0123456789abcdef', 'hex');

            function encrypt(val, pad) {
                const c = crypto.createCipheriv('aes256', key, iv);
                c.setAutoPadding(pad);
                return c.update(val, 'utf8', 'latin1') + c.final('latin1');
            }

            function decrypt(val, pad) {
                const c = crypto.createDecipheriv('aes256', key, iv);
                c.setAutoPadding(pad);
                return c.update(val, 'latin1', 'utf8') + c.final('utf8');
            }

            let plaintext = '0123456789abcdef0123456789abcdef'; // Multiple of block size
            let encrypted = encrypt(plaintext, false);
            let decrypted = decrypt(encrypted, false);
            assert.equal(decrypted, plaintext);

            plaintext = '0123456789abcdef0123456789abcde'; // not a multiple
            encrypted = encrypt(plaintext, true);
            decrypted = decrypt(encrypted, true);
            assert.equal(decrypted, plaintext);
        });

        it("aes wrap", () => {
            const datas = [
                {
                    algorithm: 'aes128-wrap',
                    key: 'b26f309fbe57e9b3bb6ae5ef31d54450',
                    iv: '3fd838af4093d749',
                    text: '12345678123456781234567812345678',
                    enc: '612abece03d514c6a81b7a21f8895061877c43c4064bb89120bf80185809642d341ea88ff92bdf03'
                },
                {
                    algorithm: 'id-aes128-wrap-pad',
                    key: 'b26f309fbe57e9b3bb6ae5ef31d54450',
                    iv: '3fd838af',
                    text: '12345678123456781234567812345678123',
                    enc: 'dabf2d9db41ada96198435b0a3fe5b168959c19fff959a487953d60be8eb45c09f87e1ef609111b9a61db8e2be326c9b'
                },
                {
                    algorithm: 'aes192-wrap',
                    key: '40978085d68091f7dfca0d7dfc7a5ee76d2cc7f2f345a304',
                    iv: '3fd838af4093d749',
                    text: '12345678123456781234567812345678',
                    enc: 'e24c00fb63fe165ba5e180c786c3349f938081a1acbb48926f7f8219bd912fc41bf1d844b14e1472'
                },
                {
                    algorithm: 'id-aes192-wrap-pad',
                    key: '40978085d68091f7dfca0d7dfc7a5ee76d2cc7f2f345a304',
                    iv: '3fd838af',
                    text: '12345678123456781234567812345678123',
                    enc: 'ae32ae4c8914774fd6cc304ce26ee050aea98fb8189a4c808ce984d3debb1e79611792be5108a3355167eecb0900a72e'
                },
                {
                    algorithm: 'aes256-wrap',
                    key: '29c9eab5ed5ad44134a1437fe2e673b4d88a5b7c72e68454fea08721392b7323',
                    iv: '3fd838af4093d749',
                    text: '12345678123456781234567812345678',
                    enc: '83e4569782f43a2af901c4c371ffbc0dcf6ea5ce3e189b2420e7535318fc7243f84220074a7c61a1'
                },
                {
                    algorithm: 'id-aes256-wrap-pad',
                    key: '29c9eab5ed5ad44134a1437fe2e673b4d88a5b7c72e68454fea08721392b7323',
                    iv: '3fd838af',
                    text: '12345678123456781234567812345678123',
                    enc: '24ae1865a97f596c45a2594c565f2e55ffc874890b36526040ae520fffe33115ddbdcfe4ef4716bc40d64643ea5bbf8c'
                },
            ];

            datas.forEach((data) => {
                const cipher = crypto.createCipheriv(
                    data.algorithm,
                    Buffer.from(data.key, 'hex'),
                    Buffer.from(data.iv, 'hex'));
                const ciphertext = cipher.update(data.text);
                assert.equal(ciphertext.toString('hex'), data.enc);

                const decipher = crypto.createDecipheriv(
                    data.algorithm,
                    Buffer.from(data.key, 'hex'),
                    Buffer.from(data.iv, 'hex'));
                const msg = decipher.update(ciphertext, 'buffer', 'utf8');

                assert.equal(msg, data.text);
            });
        });

        it("des3 wrap", () => {
            const data = {
                key: Buffer.from('3c08e25be22352910671cfe4ba3652b1220a8a7769b490ba', 'hex'),
                iv: Buffer.alloc(0),
                plaintext: '32|RmVZZkFUVmpRRkp0TmJaUm56ZU9qcnJkaXNNWVNpTTU*|iXmckfRWZBG' +
                    'WWELweCBsThSsfUHLeRe0KCsK8ooHgxie0zOINpXxfZi/oNG7uq9JWFVCk70gfzQH8ZU' +
                    'JjAfaFg**'
            };

            const cipher = crypto.createCipheriv('des3-wrap', data.key, data.iv);
            const ciphertext = cipher.update(data.plaintext, 'utf8');

            const decipher = crypto.createDecipheriv('des3-wrap', data.key, data.iv);
            const msg = decipher.update(ciphertext, 'buffer', 'utf8');

            assert.equal(msg, data.plaintext);
        });

        it("wrong encoding", () => {
            const createCipher = () => {
                return crypto.createCipheriv('aes-256-cbc', crypto.randomBytes(32), crypto.randomBytes(16));
            };

            {
                const cipher = createCipher();
                cipher.update('test', 'utf-8', 'utf-8');
                assert.throws(() => cipher.update('666f6f', 'hex', 'hex'));
            }

            {
                const cipher = createCipher();
                cipher.update('test', 'utf-8', 'utf-8');
                assert.throws(() => cipher.final('hex'));
            }

            {
                const cipher = createCipher();
                cipher.update('test', 'utf-8', 'utf-8');
                assert.throws(() => cipher.final('bad2'));
            }

            {
                const cipher = createCipher();
                assert.throws(() => cipher.update('test', 'utf-8', 'bad3'));
            }
        });
    });

    describe("PKey", () => {
        describe("RSA", () => {
            it("PEM import/export", () => {
                var pk = crypto.PKey.from(rsa4096_pem);
                assert.equal(pk.pem(), rsa4096_pem);

                var pk = new crypto.PKey(rsa4096_pem);
                assert.equal(pk.pem(), rsa4096_pem);
            });

            it("toString", () => {
                var pk = crypto.PKey.from(rsa4096_pem);
                assert.equal(pk, rsa4096_pem);
            });

            it("Der import/export", () => {
                var pk = crypto.PKey.from(rsa4096_pem);
                var der = pk.der();
                pk = crypto.PKey.from(der);
                assert.equal(pk.pem(), rsa4096_pem);

                var pk = new crypto.PKey(der);
                assert.equal(pk.pem(), rsa4096_pem);
            });

            it("Json import/export", () => {
                var pk = crypto.PKey.from(rsa4096_pem);
                var json = pk.json();

                assert.deepEqual(json, {
                    "kty": "RSA",
                    "n": "iAUwIJyWHEnusONGDVCguTr3FkkVoSiDJ2mmFYYibt1paXpIiEKQy-OwykFcOG0Ew9UGEEvveRQbKN-bpUV5uH6q7pgnfDubA2VSLST7lHcXJd2as4DNyFMtgXLOj0dVSk4NduWlVgY2fUu17sJJBmysYjCjmB76P92DLfIvlI-4OYEOFSLQCG56KA8ZvP9HTnHiI0Lnerjf14cjr1Ubgw0ce9KMJ96LLnZp9Q6hBCXalagDo9MofuyScpFX1X0ixirQ2VtomzTvle9EIdfmat6EoLzxz8YNfl6mllvCVrlFJw1DvXfxLlkDR9I-te1B89L7Eljt90VBKmzjjJiKmuhmW8HhJMpe3VBG7t8c3J-F_cJLx7ZDk6_XNhxWPbzL9SNhTRg6015YDsX01bFyi1GUHdFocPmzgZ6nw3anFT85-q7l9M4yGhRQbfUWQ4rT0zCFobJZQeO4ZyiBM0fuAGhln0MogIdFaoh7xmVggL6XxJVOApXXGV7Z8xDjzbLpBI2UHiX8W33ZbrXYiDexvfBQuR2SFw372h_LCF-fOI8kxZr9BNU1RSf26RCX0Mi0Fdbz0eeXLa3N42fGAxHYUCN5M4WEtAPcdQjQAZ7gZ-Voy9nNjMoQMWzzH84XHUI1byA8T795CnVmKMiHyCWEnOGV1ptmZrzoZoa6x6bOHuk",
                    "e": "AQAB",
                    "d": "Le6qkOiv3D-vJfapqkdm7wYVeGYXssNOftmzZyNTr2J_fUn5AmKQKPnrsnEd5kQSTts53_j0lkuO3F-eXNI4R3Am4slo1BAAycXGWU5a0ojgvT23RxSg6RwFiugtDr9E8wGmlFb6XTFd5zPQ7R6YsF20XLgWFoGnejegW7ykCqP5zxlgmwyVebNs9ugahfMirj_Q4J1wM8YIeOy-xS-VScz8qGeyQqhpEbiVEVbuUstBpDYHfKQK0cmrrpqcMZC_VHIS8sNmcLsQiO4ycMdKnR4lZW5IriQwXFM0KCQ2XTjVPFnDXVEKld8jN3atDJxhIChH9qsnONAfMGdy9ABzFVyEn7kJ4s8Las4-U-pGvejZTlk-8uDArMA-vQK4ojTJHSSYS5are5EZClxsR4XQ3CnR0errCtSdybot1godeMutRHtQGVUfVI4HySRvi9ch76iA3iJwFz3SZR4qcRyhjkF1_yIvtEu4uqFdOyvwkJE1Qr8i2GPiKqYv_Rr7VRkgWu_eXcQ-kFLZjNSOkSeSXbv847Zo75X4DQqnd9SThoZjXpMCHioxeId2U8U2_8FGJtub7PkkWgzO_Y4-zMCNY_5a17RP1yLftBy2BdLZnC7C5RPW-wmV8QhjF5gM1kAFGvR9D3tCJr3p-PgYCPQPJ4Z45XPdkmURnQhlHZCTKb0",
                    "p": "vpZmPuu9eS25yMcYKQwtwouShk8C-VCexKymleuslN7riCemy3JZhkRkd_-InaQ-bDS93CfCU4p__unoFjoA6rKjBqPyIGnUiZOPFNukVBz4dfKoiScYtTEU0cy8e_a7DEcePOXUedzK6HuDkQqvsSU0Xoy55_KdipClQ37_H-IR3Xon6I17lAQ8x4sl8CILKrmeZeHCo9ve6R2L3bUz2lacuxlZIff6QeVPmLWTKCOviFh5nmwI-IdzX5nI0WOjPH8s4EOg5SyY1NWAq0u75gjbH4K5ljByNolNJ1ErdheQ--KNcL_60q3wOlRxyXOd18i2AFhnIPyH1XT2JiRLJw",
                    "q": "trRYO3zWY5Hv7kB1aPvBXUVK_UbPf9Hv8g4IQtrOod3cn69ni_bBNW5TbWcdO6-lk3ag5qG_deexPe6Zi_LYymaO7noypYnhX_r8aqwYg5seNVtcawAxazdAkIY5wRin8BB6MpDW7ZkKe_44DuGdiJjRSbgGGZdGshjYJle5ImyLYz5YiIxsSqdzCAwCAHMxSASbCzLSlQtkHGbrSexjd9WWIAXlmndRezut5tpx0QhsHeAhRSOoMaAI_2ORAPu7JQ-t-p2txNUkb-tvyWx_Y5g02ghk9Tx_2ogJj4d3DnDFrnRjQPkw8wBSiQeihNQ2w1-hY6Vp8QjqJ99XrWvPbw",
                    "dp": "c6zTOANbB86SAWOdrWQ_7eFKuIwCMRIWmyZzIXFeWSkH6aavXLH11kFyfUayQ4Ppg0FrrtDO6Geakjyj6cGgxtJPkns1PSken7XY1P8OuSKwRt5WHpCFNYwpp8DM8axqEOSlXK7eDGzPFtXIn-LNigYbx_s_5qDhr7VlKRdOf6p1z2gSCtq8k7USssYo65uuDWuF0S56NXwAypptRs5xP2bsT77t02kwEoi8i-JBA87M_kM85cOKmlWT2AV91mDUNaa2tRM294He7Ob85nrb-52KaZCtVZPn7mPdWSyx5UYecFMsJ6_N68s4kB6qxWuP9OVUWddOGL5NL2iC8dl7Zw",
                    "dq": "Fz6moxrk49IjZnqI9YxiM42nVsX1jFuXXYJvhqHz_CAP-7kDQYlpV3Tr5FVkIL3eIP7Mxcr6YvPRVwHOQ0HoVwfpU2n0m58JL37tMl0m2UeY9kzjWzGxF-T1r-2D149dfmt6QIiw75WzAcd8Nlh6BHD835YsIIFgmzQR-_7ZLQoGSeAav3SuKmlXd0Sf1JLTSEhduXUD2baTTBHECamrlgl0iip15csccMNNArv0ExYxOzPSx8sbkQS9YFC4mBlu2-48wk_hVdOQSTT5CfVl17P7tWmv_ott8M2x-bLQcOPkIqfoINITajc2SPzRrniZZw35qIXZDrOFpwEBVK0MvQ",
                    "qi": "FxeLSz-9JNnPO_rlHl1ZKfZZ4Nt_Ys7LhCoZ5Gz4TjlUN3LDpYe8EoeW-0NDo-vsWPM8jDVGBp_OawaXxti3ruqyW8dSBGP4x0BgoV5I8nA3LWyRszw02nWRm99TFGqeM_wzGyoVLfJ-KnK0J_HXSgIeJMw9yV-l23_N9OyoBjo3d1zuPMAK6BDqPxcIXR-Sp-q84HU3WN1UHk1uRbSasUGGsFNDIkmCaMpHFaTuv5tgqUV0ljGlh1zG616zKkNaYRiRK2h4JGAu6O-xdQFUjsUVaCPi6BtFtiscxqvXU4dcYmosNMhtTwjHaWhhC8877i2gZ97Vum2RzMz3xi---g"
                });

                pk = crypto.PKey.from(json);
                assert.equal(pk.pem(), rsa4096_pem);

                var pk = crypto.PKey.from(pub_rsa4096_pem);
                var json = pk.json();

                assert.deepEqual(json, {
                    "kty": "RSA",
                    "n": "iAUwIJyWHEnusONGDVCguTr3FkkVoSiDJ2mmFYYibt1paXpIiEKQy-OwykFcOG0Ew9UGEEvveRQbKN-bpUV5uH6q7pgnfDubA2VSLST7lHcXJd2as4DNyFMtgXLOj0dVSk4NduWlVgY2fUu17sJJBmysYjCjmB76P92DLfIvlI-4OYEOFSLQCG56KA8ZvP9HTnHiI0Lnerjf14cjr1Ubgw0ce9KMJ96LLnZp9Q6hBCXalagDo9MofuyScpFX1X0ixirQ2VtomzTvle9EIdfmat6EoLzxz8YNfl6mllvCVrlFJw1DvXfxLlkDR9I-te1B89L7Eljt90VBKmzjjJiKmuhmW8HhJMpe3VBG7t8c3J-F_cJLx7ZDk6_XNhxWPbzL9SNhTRg6015YDsX01bFyi1GUHdFocPmzgZ6nw3anFT85-q7l9M4yGhRQbfUWQ4rT0zCFobJZQeO4ZyiBM0fuAGhln0MogIdFaoh7xmVggL6XxJVOApXXGV7Z8xDjzbLpBI2UHiX8W33ZbrXYiDexvfBQuR2SFw372h_LCF-fOI8kxZr9BNU1RSf26RCX0Mi0Fdbz0eeXLa3N42fGAxHYUCN5M4WEtAPcdQjQAZ7gZ-Voy9nNjMoQMWzzH84XHUI1byA8T795CnVmKMiHyCWEnOGV1ptmZrzoZoa6x6bOHuk",
                    "e": "AQAB"
                });

                pk = crypto.PKey.from(json);
                assert.equal(pk.pem(), pub_rsa4096_pem);

                pk = new crypto.PKey(json);
                assert.equal(pk.pem(), pub_rsa4096_pem);
            });

            it("import publicKey", () => {
                var pk = crypto.PKey.from(pub_rsa4096_pem);
                assert.isFalse(pk.isPrivate());

                assert.equal(pk, pub_rsa4096_pem);

                var pk1 = crypto.PKey.from(pk.der());
                assert.isFalse(pk1.isPrivate());

                assert.equal(pk1.pem(), pub_rsa4096_pem);
            });

            it("import rsa format publicKey", () => {
                var pk = crypto.PKey.from(rsa_pub_key);
                assert.isFalse(pk.isPrivate());
            });

            it("publicKey", () => {
                var pk = crypto.PKey.from(rsa4096_pem);
                assert.isTrue(pk.isPrivate());

                var pk1 = pk.publicKey;
                assert.isFalse(pk1.isPrivate());

                assert.equal(pk1, pub_rsa4096_pem);
            });

            it("clone", () => {
                var pk = crypto.PKey.from(rsa4096_pem);

                var pk1 = pk.clone();

                assert.equal(pk1.pem(), pk.pem());
            });

            it("gen_key", () => {
                var pk = crypto.generateKey(512);
                var pk1 = crypto.generateKey(512);

                assert.notEqual(pk.pem(), pk1.pem());
            });

            it("equal", () => {
                var pk = crypto.PKey.from(rsa4096_pem);

                var pk1 = pk.clone();

                assert.ok(pk1.equals(pk));

                var pk = crypto.generateKey(512);
                var pk1 = crypto.generateKey(512);

                assert.notOk(pk1.equals(pk));
            });

            it("encrypt/decrypt", () => {
                var pk = crypto.PKey.from(rsa4096_pem);

                var pk1 = pk.publicKey;

                var d = pk1.encrypt("abcdefg");
                assert.equal(pk.decrypt(d).toString(), "abcdefg");

                assert.throws(() => {
                    pk1.decrypt(d);
                });
            });

            it("sign/verify", () => {
                var pk = crypto.PKey.from(rsa4096_pem);

                var pk1 = pk.publicKey;

                var md = hash.md5("abcdefg").digest();
                var md1 = hash.md5("abcdefg1").digest();
                var d = pk.sign(md);
                assert.isTrue(pk1.verify(md, d));
                assert.isFalse(pk1.verify(md1, d));

                assert.throws(() => {
                    pk1.sign(md);
                });
            });

            it("format", () => {
                var pk = crypto.PKey.from(rsa4096_pem);

                var md = hash.md5("abcdefg").digest();

                pk.sign(md, { format: 'raw' });
                assert.throws(() => {
                    pk.sign(md, { format: 'der' });
                });
            });
        });

        describe("EC", () => {
            it("PEM import/export", () => {
                var pk = crypto.PKey.from(ec_pem);
                assert.equal(pk.pem(), ec_pem);

                pk = new crypto.PKey(ec_pem);
                assert.equal(pk.pem(), ec_pem);
            });

            it("toString", () => {
                var pk = crypto.PKey.from(ec_pem);
                assert.equal(pk, ec_pem);
            });

            it("Der import/export", () => {
                var pk = crypto.PKey.from(ec_pem);
                var der = pk.der();
                pk = crypto.PKey.from(der);
                assert.equal(pk.pem(), ec_pem);

                pk = new crypto.PKey(der);
                assert.equal(pk.pem(), ec_pem);
            });

            it("Json import/export", () => {
                var pk = crypto.PKey.from(ec_pem);
                var json = pk.json();

                assert.deepEqual(json, {
                    "kty": "EC",
                    "crv": "P-521",
                    "x": "ATfNNFuuvlGxrTGoXgyfSAGgRNNDnO3rN3k74urKJdVS14RYhdnSwm91Bm-F1l-T1XKlAY2yRnzG9w1Ukvo8c0wL",
                    "y": "ASBHqrruB6kdkEUB3vlW3-UIkk4HtKdUeTwN-7m3j2rgZvYR1ffRAapDvWqKGiBjomqWafxokBkbDI0c95f6f4XU",
                    "d": "AfkIbUHXfW41njdpoKuqqKludcoLJS8D_oMEwkj-GVaXFNKccIoF5iKGu2c69kNDjo83R_7wyGlfRczsklkik1ST"
                });

                pk = crypto.PKey.from(json);
                assert.equal(pk.pem(), ec_pem);

                pk = crypto.PKey.from({
                    "kty": "EC",
                    "crv": "P-521",
                    "d": "AfkIbUHXfW41njdpoKuqqKludcoLJS8D_oMEwkj-GVaXFNKccIoF5iKGu2c69kNDjo83R_7wyGlfRczsklkik1ST"
                });
                assert.equal(pk.pem(), ec_pem);

                var pk = crypto.PKey.from(pub_ec_pem);
                var json = pk.json();

                assert.deepEqual(json, {
                    "kty": "EC",
                    "crv": "P-521",
                    "x": "ATfNNFuuvlGxrTGoXgyfSAGgRNNDnO3rN3k74urKJdVS14RYhdnSwm91Bm-F1l-T1XKlAY2yRnzG9w1Ukvo8c0wL",
                    "y": "ASBHqrruB6kdkEUB3vlW3-UIkk4HtKdUeTwN-7m3j2rgZvYR1ffRAapDvWqKGiBjomqWafxokBkbDI0c95f6f4XU"
                });

                pk = crypto.PKey.from(json);
                assert.equal(pk.pem(), pub_ec_pem);

                var pk = new crypto.PKey(json);
                assert.equal(pk.pem(), pub_ec_pem);
            });

            it("import publicKey", () => {
                var pk = crypto.PKey.from(pub_ec_pem);
                assert.isFalse(pk.isPrivate());

                assert.equal(pk, pub_ec_pem);

                var pk1 = crypto.PKey.from(pk.der());
                assert.isFalse(pk1.isPrivate());

                assert.equal(pk1.pem(), pub_ec_pem);
            });

            it("publicKey", () => {
                var pk = crypto.PKey.from(ec_pem);
                assert.isTrue(pk.isPrivate());

                var pk1 = pk.publicKey;
                assert.isFalse(pk1.isPrivate());

                assert.equal(pk1, pub_ec_pem);
            });

            it("clone", () => {
                var pk = crypto.PKey.from(ec_pem);

                var pk1 = pk.clone();

                assert.equal(pk1.pem(), pk.pem());
            });

            it("gen_key", () => {
                var pk = crypto.generateKey();
                var pk1 = crypto.generateKey();

                assert.notEqual(pk.pem(), pk1.pem());
            });

            it("equal", () => {
                var pk = crypto.PKey.from(ec_pem);

                var pk1 = pk.clone();

                assert.ok(pk1.equals(pk));

                var pk = crypto.generateKey();
                var pk1 = crypto.generateKey();

                assert.notOk(pk1.equals(pk));
            });

            it("sign/verify", () => {
                var pk = crypto.PKey.from(ec_pem);

                var pk1 = pk.publicKey;

                var md = hash.md5("abcdefg").digest();
                var md1 = hash.md5("abcdefg1").digest();

                console.time('ecc sign');
                var d = pk.sign(md);
                console.timeEnd('ecc sign');

                console.time('ecc verify');
                assert.isTrue(pk1.verify(md, d));
                console.timeEnd('ecc verify');

                assert.isFalse(pk1.verify(md1, d));

                assert.throws(() => {
                    pk1.sign(md);
                });
            });

            it("sign/verify format", () => {
                var pk = crypto.PKey.from(ec_pem);

                var pk1 = pk.publicKey;

                var md = hash.md5("abcdefg").digest();

                var d = pk.sign(md, {
                    format: 'raw'
                });

                assert.equal(d.length, 132);

                assert.isTrue(pk1.verify(md, d, {
                    format: 'raw'
                }));

                assert.throws(() => {
                    pk1.verify(md);
                });
            });

            it("secp256k1 sign/verify", () => {
                var pk = crypto.PKey.from(ec256_pem);

                var pk1 = pk.publicKey;

                var md = hash.md5("abcdefg").digest();
                var md1 = hash.md5("abcdefg1").digest();

                console.time('secp256k1 sign');
                var d = pk.sign(md);
                console.timeEnd('secp256k1 sign');

                console.time('secp256k1 verify');
                assert.isTrue(pk1.verify(md, d));
                console.timeEnd('secp256k1 verify');

                assert.isFalse(pk1.verify(md1, d));

                assert.throws(() => {
                    pk1.sign(md);
                });
            });

            it("secp256k1 sign/verify format", () => {
                var pk = crypto.PKey.from(ec256_pem);

                var pk1 = pk.publicKey;

                var md = hash.md5("abcdefg").digest();

                var d = pk.sign(md, {
                    format: 'raw'
                });

                assert.equal(d.length, 64);

                assert.isTrue(pk1.verify(md, d, {
                    format: 'raw'
                }));

                assert.throws(() => {
                    pk1.verify(md);
                });
            });

            it("secp256k1 sign/recover", () => {
                var pk = crypto.PKey.from(ec256_pem);

                var pk1 = pk.publicKey;

                var md = hash.md5("abcdefg").digest();

                var d = pk.sign(md, {
                    recoverable: true
                });

                var d1 = pk.sign(md, {
                    format: 'raw'
                });

                assert.ok(pk.verify(md, d.slice(0, 64), {
                    format: 'raw'
                }));

                var pk2 = crypto.ECKey.recover(md, d);
                assert.deepEqual(pk2.json(), pk1.json());
            });

            describe('compress', () => {
                it('not support curve', () => {
                    function t(name) {
                        var sk = crypto.generateKey(name);
                        assert.throws(() => {
                            var jwt1 = sk.json({
                                compress: true
                            });
                        })
                    }

                    ['secp224r1', 'secp224k1', 'x25519', 'ed25519', 'Bls12381G1', 'Bls12381G2'].forEach(t);
                });

                function t(name) {
                    it(`curve ${name}`, () => {
                        var sk = crypto.generateKey(name);
                        var jwt1 = sk.json({
                            compress: true
                        });

                        var sk1 = new crypto.PKey(jwt1);
                        assert.deepEqual(sk1.json(), sk.json());

                        var jwt2 = sk.publicKey.json({
                            compress: true
                        });
                        var sk2 = new crypto.PKey(jwt2);
                        assert.deepEqual(sk2.json(), sk.publicKey.json());
                    });
                }

                ['secp192r1', 'secp192k1', 'secp256r1', 'secp256k1', 'brainpoolP256r1',
                    'secp384r1', 'brainpoolP384r1', 'brainpoolP512r1', 'secp521r1', 'sm2'].forEach(t);
            });

            it('FIX: secp256k1 verify error.', () => {
                console.time('secp256k1 import');
                var pk = crypto.PKey.from({
                    "kty": "EC",
                    "crv": "secp256k1",
                    "d": "rSnfXs7h-q2yNflXjMTJHZz_Md3KKKr2Lk1ot0-BN2k"
                });
                console.timeEnd('secp256k1 import');

                var test_data = [
                    ['ebd7f85f3c944eea17a01a95b749f306b958d8e2',
                        '304502202876bd6b6091e71294c39c76ff5c3f0b5b29bd8a554b3b6ba1a23d71cbfc43d7022100c2445201eae4fd0da1f3844aaa0888dca7754509a2e18330daceb5f333725bec'],
                    ['ebd7f85f3c944eea17a01a95b749f306b958d8e2',
                        '3045022100d02bb0c6fd3e389dd966be55b333d307438a67e07cf6534b45c642df4a83a7dd022056a6dd25df0d1de94d232e68d33fec0171dffd5f7bef264cf379e3f8a962d355'],
                    ['4b06387d492c935e2b1d63d15baaf5aa3ccff13e5275c1311914969f67833756',
                        '3046022100f799d5961ce2ad769d605e7834dd64e14766b23b51f0310f150bf2064547cbc8022100caae88bbc104e6589727b6a70cae511a610f456e487f6482eb819138d1d7c978'],
                    ['4b06387d492c935e2b1d63d15baaf5aa3ccff13e5275c1311914969f67833756',
                        '30440220651892d5a9c0560447d0d5e526d245f1007cce63bb19a1568b30e2d85a68652f02203476fd6e2798acfb7f39986d7c9afdb3b5461dfb9e366b044ad1bf6693e8101e'],
                ]

                test_data.forEach(d => assert.ok(pk.verify(new Buffer(d[0], 'hex'), new Buffer(d[1], 'hex'))));
            });
        });

        describe("SM2", () => {
            it("PEM import/export", () => {
                var pk = crypto.PKey.from(sm2_pem);
                assert.equal(pk.pem(), sm2_pem);

                pk = new crypto.PKey(sm2_pem);
                assert.equal(pk.pem(), sm2_pem);
            });

            it("toString", () => {
                var pk = crypto.PKey.from(sm2_pem);
                assert.equal(pk, sm2_pem);
            });

            it("Der import/export", () => {
                var pk = crypto.PKey.from(sm2_pem);
                var der = pk.der();
                pk = crypto.PKey.from(der);
                assert.equal(pk.pem(), sm2_pem);

                pk = new crypto.PKey(der);
                assert.equal(pk.pem(), sm2_pem);
            });

            it("Json import/export", () => {
                var pk = crypto.PKey.from(sm2_pem);
                var json = pk.json();

                assert.deepEqual(json, {
                    "kty": "EC",
                    "crv": "SM2",
                    "x": "1KnIoMvdNODUrcEzQNnHbplwxNNyuHwIUnU0oNQ_0R0",
                    "y": "c_e2CHv5PB1-sKzzFGs30tT1XfwPUfIGnb5VEUN5bn4",
                    "d": "fcRRalaycsaXpKQYGcbmU8Qi93KqXnpodAwIK3vEOoI"
                });

                pk = crypto.PKey.from(json);
                assert.equal(pk.pem(), sm2_pem);

                pk = crypto.PKey.from({
                    "kty": "EC",
                    "crv": "SM2",
                    "d": "fcRRalaycsaXpKQYGcbmU8Qi93KqXnpodAwIK3vEOoI"
                });
                assert.equal(pk.pem(), sm2_pem);

                var pk = crypto.PKey.from(pub_sm2_pem);
                var json = pk.json();

                assert.deepEqual(json, {
                    "kty": "EC",
                    "crv": "SM2",
                    "x": "1KnIoMvdNODUrcEzQNnHbplwxNNyuHwIUnU0oNQ_0R0",
                    "y": "c_e2CHv5PB1-sKzzFGs30tT1XfwPUfIGnb5VEUN5bn4",
                });

                pk = crypto.PKey.from(json);
                assert.equal(pk.pem(), pub_sm2_pem);

                var pk = new crypto.PKey(json);
                assert.equal(pk.pem(), pub_sm2_pem);
            });

            it("import publicKey", () => {
                var pk = crypto.PKey.from(pub_sm2_pem);
                assert.isFalse(pk.isPrivate());

                assert.equal(pk, pub_sm2_pem);

                var pk1 = crypto.PKey.from(pk.der());
                assert.isFalse(pk1.isPrivate());

                assert.equal(pk1.pem(), pub_sm2_pem);
            });

            it("publicKey", () => {
                var pk = crypto.PKey.from(sm2_pem);
                assert.isTrue(pk.isPrivate());

                var pk1 = pk.publicKey;
                assert.isFalse(pk1.isPrivate());

                assert.equal(pk1, pub_sm2_pem);
            });

            it("clone", () => {
                var pk = crypto.PKey.from(sm2_pem);

                var pk1 = pk.clone();

                assert.equal(pk1.pem(), pk.pem());
            });

            it("gen_key", () => {
                var pk = crypto.generateKey("SM2");
                var pk1 = crypto.generateKey("SM2");

                assert.notEqual(pk.pem(), pk1.pem());
            });


            it("equal", () => {
                var pk = crypto.PKey.from(sm2_pem);

                var pk1 = pk.clone();

                assert.ok(pk1.equals(pk));

                var pk = crypto.generateKey("SM2");
                var pk1 = crypto.generateKey("SM2");

                assert.notOk(pk1.equals(pk));
            });

            it("sign/verify", () => {
                var pk = crypto.PKey.from(sm2_pem);

                var pk1 = pk.publicKey;

                var md = hash.md5("abcdefg").digest();
                var md1 = hash.md5("abcdefg1").digest();
                var d = pk.sign(md);
                assert.isTrue(pk1.verify(md, d));
                assert.isFalse(pk1.verify(md1, d));

                assert.throws(() => {
                    pk1.sign(md);
                });
            });

            it("sm2 sign/verify format", () => {
                var pk = crypto.PKey.from(sm2_pem);

                var pk1 = pk.publicKey;

                var md = hash.md5("abcdefg").digest();

                var d = pk.sign(md, {
                    format: 'raw'
                });

                assert.equal(d.length, 64);

                assert.isTrue(pk1.verify(md, d, {
                    format: 'raw'
                }));

                assert.throws(() => {
                    pk1.verify(md);
                });
            });

            it("encrypt/decrypt", () => {
                var pk = crypto.PKey.from(sm2_pem);

                var pk1 = pk.publicKey;

                var d = pk1.encrypt("abcdefg");
                assert.equal(pk.decrypt(d).toString(), "abcdefg");

                assert.throws(() => {
                    pk1.decrypt(d);
                });
            });

            xit("sign/verify with same key", () => {
                var pk = crypto.generateKey("SM2");
                var json = pk.json();
                var pk1 = crypto.PKey.from(json);

                var md = hash.md5("abcdefg").digest();
                var d = pk.sign(md);
                assert.isTrue(pk1.verify(md, d));
            });
        });

        describe("computeSecret", () => {
            var ec_algo = [
                'sm2',
                'secp192r1',
                'secp224r1',
                'secp256r1',
                'secp384r1',
                'secp521r1',
                'secp192k1',
                'secp224k1',
                'secp256k1',
                'brainpoolP256r1',
                'brainpoolP384r1',
                'brainpoolP512r1',
                'x25519',
                'Bls12381G1',
                'Bls12381G2'
            ];

            ec_algo.forEach(ec => {
                it(ec, () => {
                    var alice = crypto.generateKey(ec);
                    var bob = crypto.generateKey(ec);
                    var aliceSecret = alice.computeSecret(bob.publicKey);
                    var bobSecret = bob.computeSecret(alice.publicKey);

                    assert.deepEqual(aliceSecret, bobSecret);
                });
            });
        });

        it("name", () => {
            var pk = crypto.PKey.from(rsa4096_pem);
            assert.equal(pk.name, "RSA");

            pk = crypto.PKey.from(ec_pem);
            assert.equal(pk.name, "EC");

            pk = crypto.PKey.from(sm2_pem);
            assert.equal(pk.name, "SM2");
        });

        it("keySize", () => {
            var pk = crypto.PKey.from(rsa4096_pem);
            assert.equal(pk.keySize, 4096);

            pk = crypto.PKey.from(ec_pem);
            assert.equal(pk.keySize, 521);

            pk = crypto.PKey.from(sm2_pem);
            assert.equal(pk.keySize, 256);
        });

        it("curve", () => {
            var pk = crypto.PKey.from(rsa4096_pem);
            assert.isUndefined(pk.curve);

            pk = crypto.PKey.from(ec_pem);
            assert.equal(pk.curve, 'P-521');

            pk = crypto.PKey.from(sm2_pem);
            assert.equal(pk.curve, 'SM2');
        });

        it("BUG: crash when new PKey with empty string", () => {
            assert.throws(() => {
                new crypto.PKey('');
            });
        });

        it("BUG: crash in PKey.toJSON()", () => {
            crypto.generateKey("P-256").toJSON();
        });
    });

    describe("ed25519", () => {
        var jwk = {
            "kty": "OKP", "crv": "Ed25519",
            "d": "nWGxne_9WmC6hEr0kuwsxERJxWl7MmkZcDusAxyuf2A",
            "x": "11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo"
        };
        var jwk_pk = {
            "kty": "OKP", "crv": "Ed25519",
            "x": "11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo"
        };

        var der_sk = 'MC4CAQAwBQYDK2VwBCIEIJ1hsZ3v/VpguoRK9JLsLMREScVpezJpGXA7rAMcrn9g';
        var der_pk = "MCowBQYDK2VwAyEA11qYAYKxCrfVS/7TyWQHOg7hcvPapiMlrwIaaPcHURo=";

        var pem_sk = `-----BEGIN PRIVATE KEY-----
MC4CAQAwBQYDK2VwBCIEIJ1hsZ3v/VpguoRK9JLsLMREScVpezJpGXA7rAMcrn9g
-----END PRIVATE KEY-----
`;

        var pem_pk = `-----BEGIN PUBLIC KEY-----
MCowBQYDK2VwAyEA11qYAYKxCrfVS/7TyWQHOg7hcvPapiMlrwIaaPcHURo=
-----END PUBLIC KEY-----
`;

        it("export/import json", () => {
            var sk = new crypto.PKey(jwk);
            assert.deepEqual(sk.json(), jwk);

            var pk = new crypto.PKey(jwk_pk);
            assert.deepEqual(pk.json(), jwk_pk);
        });

        it("export/import der", () => {
            var pk = new crypto.PKey(Buffer.from(der_pk, 'base64'));
            assert.deepEqual(pk.json(), jwk_pk);
            assert.equal(pk.der().base64(), der_pk);

            var sk = new crypto.PKey(Buffer.from(der_sk, 'base64'));
            assert.deepEqual(sk.json(), jwk);
            assert.equal(sk.der().base64(), der_sk);
        });

        it("export/import pem", () => {
            var pk = new crypto.PKey(pem_pk);
            assert.deepEqual(pk.json(), jwk_pk);
            assert.equal(pk.pem(), pem_pk);

            var sk = new crypto.PKey(pem_sk);
            assert.deepEqual(sk.json(), jwk);
            assert.equal(sk.pem(), pem_sk);
        });

        it("private only key", () => {
            var jwk1 = {
                "kty": "OKP", "crv": "Ed25519",
                "d": "nWGxne_9WmC6hEr0kuwsxERJxWl7MmkZcDusAxyuf2A"
            };

            var sk = new crypto.PKey(jwk1);
            assert.deepEqual(sk.json(), jwk);
        });

        it("get public key", () => {
            var sk = new crypto.PKey(jwk);
            assert.deepEqual(sk.publicKey.json(), {
                "kty": "OKP", "crv": "Ed25519",
                "x": "11qYAYKxCrfVS_7TyWQHOg7hcvPapiMlrwIaaPcHURo"
            });
        });

        it("clone", () => {
            var sk = new crypto.PKey(jwk);
            var sk1 = sk.clone();
            assert.deepEqual(sk1.json(), jwk);
        });

        it("sign/verify", () => {
            var sk = new crypto.PKey(jwk);
            var sig = sk.sign('abcd');
            assert.isTrue(sk.verify('abcd', sig));
            assert.isFalse(sk.verify('abcd1', sig));
        });

        it("keySize/curve", () => {
            var sk = new crypto.PKey(jwk);
            assert.deepEqual(sk.keySize, 256);
            assert.deepEqual(sk.curve, "Ed25519");
        });

        it("toX25519", () => {
            var jwk1 = {
                "kty": "OKP", "crv": "Ed25519",
                "d": "nWGxne_9WmC6hEr0kuwsxERJxWl7MmkZcDusAxyuf2A"
            };

            var sk = new crypto.PKey(jwk);
            assert.deepEqual(sk.toX25519().json(), {
                "kty": "OKP",
                "crv": "X25519",
                "x": "2F4H7CKwrYgVN8L0TWYtGhQ8-DDFespDBdhcepD2ti4",
                "d": "MHyDhk8oM8tCei7xwAoBPP3_J2jZgMCjpSDwBpBN6U8"
            });

            var sk = new crypto.PKey(jwk1);
            assert.deepEqual(sk.toX25519().json(), {
                "kty": "OKP",
                "crv": "X25519",
                "x": "2F4H7CKwrYgVN8L0TWYtGhQ8-DDFespDBdhcepD2ti4",
                "d": "MHyDhk8oM8tCei7xwAoBPP3_J2jZgMCjpSDwBpBN6U8"
            });

            var pk = new crypto.PKey(jwk_pk);
            assert.deepEqual(pk.toX25519().json(), {
                "kty": "OKP",
                "crv": "X25519",
                "x": "2F4H7CKwrYgVN8L0TWYtGhQ8-DDFespDBdhcepD2ti4"
            });
        });

        it("test suite", () => {
            var data = require('./crypto_case/eddsa.json');

            data.forEach(d => {
                var sk = new crypto.PKey({
                    "kty": "OKP", "crv": "Ed25519",
                    "d": d[0]
                });

                var pk = new crypto.PKey({
                    "kty": "OKP", "crv": "Ed25519",
                    "x": d[1]
                });

                assert.equal(sk.json().x, pk.json().x);

                var msg = Buffer.from(d[3], "base64");
                var sig = sk.sign(msg);
                assert.isTrue(sk.verify(msg, sig));

                // assert.equal(sig.base64(), d[2]);

                sig = Buffer.from(d[2], "base64");
                assert.isTrue(sk.verify(msg, sig));
                msg = Buffer.concat([msg, new Buffer('1')]);
                assert.isFalse(sk.verify(msg, sig));
            });

        });
    });

    describe("bls", () => {
        var g1_key = {
            "kty": "OKP",
            "crv": "Bls12381G1",
            "x": "tCgCNuUYQotPEsrljWi-lIRIPpzhqsnJV1NPnE7je6glUb-FJm9IYkuv2hbHw22i",
            "d": "TXNvJBBG3h23H5hFJcnRZmYd_j1TqpwtJOllYGU3yyw"
        };
        var g2_key = {
            "kty": "OKP",
            "crv": "Bls12381G2",
            "x": "h_rkcTKXXzRbOPr9UxSfegCbid2U_cVNXQUaKeGF7UhwrMJFP70uMH0VQ9-3-_2zDPAAjflsdeLkOXW3-ShktLxuPy8UlXSNgKNmkfb-rrj-FRwbs13pv_WsIf-eV66-",
            "d": "PofPmtCTsMilP9gluxrSDTC7DPbKwSMEzxVCZxq_L2I"
        };

        var data = {
            pks: [
                "b836ccf44fa01e46745ccc3a47855e959783ef5df5cdcc607354b98d52c16b6613761339bfb833fd525cdca7c8071c6b",
                "a317ce36dcf2bf6fd262dbad80427f890bc166152682cb6c600a66eb7d525f200839ab798ca4877c3143a31201905de4",
                "b9b7b4f4a88d98f34b4c9ba8ae10e935ba51164ddc045d6ae26b403c87a6934e6c75f9fb5cc4b3b29a1255b316d08de5",
                "a386a2bc7e9d13cf9b4ad3c819547534c768aeae6a2414bfcebee50f38aaf85a9d610974db931278c08fe86a91eb2999",
            ],
            msgs: [
                "690a91fc0a7a49bbc5afe9516c1831ca8845f281ef2e414f7dfeb71b5e91a902",
                "3829d4fc2332afc2634079823b89598f3674be5da324b1092b3d8aeb7af5e164",
                "9a9406647ed6af16b5ce3e828c5f5ef35f1221ed10476209476c12776ce417ac",
                "3e8e4bcb78fda59a43ebfb90970cc6036ce18dc3d3a1b714cc4c1bfc00b8258e",
            ],
            sigs: [
                "864ed65f224cf4e49e9bbf313d3dc243649885d9bd432a15e6c1259f2e4c29fcefa7a4c3aafaac01519f7c92239702d7096df2971b1801cd26d0ca0d5e7743ccb0abe79d8c383f9bb04ebe553a3094e84d55bc79be7eff5ffdb9b322205acfd1",
                "90efd8c82c356956fc170bec2aed874d14cea079625dfe69d8bc375e10fcd96e2c0348dfeb713f1889629ccb9ec95fee0e0c9cc7a728d8a7068701a04192ed585ec761edf6e2c1e44ceaaa61732052af81a6033fa7d375d7f7157909549322da",
                "9023f43cc8e05a3e842b242b9f6781a9e2eadbfcbebd1242563e56bb47cd273ef20fc0c5099e05e83093581907bfd02915b5ef8c553918d4524c274a8856950c87c6314a2c003a2ed28e5fb56ddfdb233a2b895c2397bd15629325d95ca43b83",
                "82c8fedc6ad43e945bbf7529d55b73d7ce593bc9ea94dfaf91d720b2ab0e51ce551f7fcda96d428b627ff776c94d6f360af425fe7fb4e4469b893071149db747f27a8bd488af7ba7f0edf86c7e551af89d7a55d4fc86968e10f91ed76e68e373",
            ],
            manipulated: [false, false, true, true],
        };

        it("export/import json", () => {
            var sk = new crypto.PKey(g1_key);
            assert.deepEqual(sk.json(), g1_key);

            var sk = new crypto.PKey(g2_key);
            assert.deepEqual(sk.json(), g2_key);
        });

        it("BlsKey export/import json", () => {
            var sk = new crypto.BlsKey(g1_key);
            assert.deepEqual(sk.json(), g1_key);

            var sk = new crypto.BlsKey(g2_key);
            assert.deepEqual(sk.json(), g2_key);
        });

        it("private only key", () => {
            var sk = new crypto.BlsKey({
                "kty": "OKP",
                "crv": "Bls12381G1",
                "d": "TXNvJBBG3h23H5hFJcnRZmYd_j1TqpwtJOllYGU3yyw"
            });
            assert.deepEqual(sk.json(), g1_key);

            var sk = new crypto.BlsKey({
                "kty": "OKP",
                "crv": "Bls12381G2",
                "d": "PofPmtCTsMilP9gluxrSDTC7DPbKwSMEzxVCZxq_L2I"
            });
            assert.deepEqual(sk.json(), g2_key);
        });

        it("get public key", () => {
            var sk = new crypto.BlsKey(g1_key);
            assert.deepEqual(sk.publicKey.json(), {
                "kty": "OKP", "crv": "Bls12381G1",
                "x": "tCgCNuUYQotPEsrljWi-lIRIPpzhqsnJV1NPnE7je6glUb-FJm9IYkuv2hbHw22i"
            });

            var sk = new crypto.BlsKey(g2_key);
            assert.deepEqual(sk.publicKey.json(), {
                "kty": "OKP", "crv": "Bls12381G2",
                "x": "h_rkcTKXXzRbOPr9UxSfegCbid2U_cVNXQUaKeGF7UhwrMJFP70uMH0VQ9-3-_2zDPAAjflsdeLkOXW3-ShktLxuPy8UlXSNgKNmkfb-rrj-FRwbs13pv_WsIf-eV66-"
            });
        });

        it("clone", () => {
            var sk = new crypto.BlsKey(g1_key);
            var sk1 = sk.clone();
            assert.deepEqual(sk1.json(), g1_key);
        });

        it("sign/verify", () => {
            var sk = new crypto.BlsKey(g1_key);
            var sig = sk.sign('abcd');
            assert.isTrue(sk.verify('abcd', sig));
            assert.isFalse(sk.verify('abcd1', sig));
        });

        it("generateKey", () => {
            var sk = crypto.generateKey('Bls12381G1');
            var sig = sk.sign('abcd');
            assert.isTrue(sk.verify('abcd', sig));
            assert.isFalse(sk.verify('abcd1', sig));

            var sk = crypto.generateKey('Bls12381G2');
            var sig = sk.sign('abcd');
            assert.isTrue(sk.verify('abcd', sig));
            assert.isFalse(sk.verify('abcd1', sig));
        });

        it("keySize/curve", () => {
            var sk = new crypto.BlsKey(g1_key);
            assert.deepEqual(sk.keySize, 256);
            assert.deepEqual(sk.curve, "Bls12381G1");
        });

        it("format", () => {
            var pk = crypto.BlsKey.from(g1_key);

            pk.sign("abcdefg", { format: 'raw' });
            assert.throws(() => {
                pk.sign("abcdefg", { format: 'der' });
            });

            var pk = crypto.BlsKey.from(g2_key);

            pk.sign("abcdefg", { format: 'raw' });
            assert.throws(() => {
                pk.sign("abcdefg", { format: 'der' });
            });
        });

        it("test suite", () => {
            for (var i = 0; i < 4; i++) {
                var sk = new crypto.BlsKey({
                    "kty": "OKP",
                    "crv": "Bls12381G1",
                    "x": hex.decode(data.pks[i]).base64()
                });

                var r = sk.verify(hex.decode(data.msgs[i]), hex.decode(data.sigs[i]));
                assert.equal(r, !data.manipulated[i]);
            }
        });

        it("aggregate", () => {
            function test_aggregate(curve) {
                var sk1 = crypto.generateKey(curve);
                var sk2 = crypto.generateKey(curve);

                var pk = crypto.BlsKey.aggregatePublicKey([sk1, sk2]);

                var msg = Buffer.from('hello world');

                var sig = crypto.BlsKey.aggregateSignature([
                    sk1.sign(msg),
                    sk2.sign(msg)
                ])

                assert.isTrue(pk.verify(msg, sig));
            }

            test_aggregate('Bls12381G1');
            test_aggregate('Bls12381G2');
        });
    });

    describe("alg", () => {
        function test_alg(alg, pk) {
            describe(alg, () => {
                it("generateKey", () => {
                    assert.equal(pk.alg, alg);
                });

                it("clone", () => {
                    assert.equal(pk.clone().alg, alg);
                });

                it("publicKey", () => {
                    assert.equal(pk.publicKey.alg, alg);
                });

                if (alg != "BLS") {
                    it("pem import", () => {
                        assert.equal(new crypto.PKey(pk.pem()).alg, alg);
                    });

                    it("pem pub import", () => {
                        assert.equal(new crypto.PKey(pk.publicKey.pem()).alg, alg);
                    });

                    it("der import", () => {
                        assert.equal(new crypto.PKey(pk.der()).alg, alg);
                    });

                    it("der pub import", () => {
                        assert.equal(new crypto.PKey(pk.publicKey.der()).alg, alg);
                    });
                }

                it("json import", () => {
                    assert.equal(new crypto.PKey(pk.json()).alg, alg);
                });
            });
        }

        test_alg("RSA", crypto.generateKey(512));
        test_alg("ECDSA", crypto.generateKey());
        test_alg("SM2", crypto.generateKey("SM2"));
        test_alg("EdDSA", crypto.generateKey("ed25519"));
        test_alg("DH", crypto.generateKey("X25519"));
        test_alg("BLS", crypto.generateKey("Bls12381G1"));
    });

    describe("X509 Cert", () => {
        var cert = new crypto.X509Cert();

        it("load", () => {
            var fl = fs.readdir(path.join(__dirname, 'cert_files'));
            fl.forEach((s) => {
                if (s.match(/\.crt/))
                    cert.import(fs.readTextFile(path.join(__dirname, 'cert_files', s)));
            });
        });

        it("clear/export", () => {
            var s = cert.pem();
            cert.clear();
            assert.deepEqual(cert.pem(), "");

            cert.import(s);

            assert.deepEqual(cert.pem(), s);

            var cert1 = new crypto.X509Cert(cert.pem(false));
            assert.deepEqual(cert1.pem(), cert.pem(false));

            var cert2 = new crypto.X509Cert(cert1.pem(false));
            assert.deepEqual(cert2.pem(), cert.pem(false));
        });

        it("load file", () => {
            var s = cert.pem();
            cert.clear();
            assert.deepEqual(cert.pem(), "");

            var fl = fs.readdir(path.join(__dirname, 'cert_files'));
            fl.forEach((s) => {
                if (s.match(/\.crt/))
                    cert.import(fs.readFile(path.join(__dirname, 'cert_files', s), 'utf-8'));
            });

            assert.deepEqual(cert.pem(), s);
        });

        it("root ca", () => {
            cert.clear();
            assert.deepEqual(cert.pem(), "");

            cert.import(fs.readTextFile(path.join(__dirname, 'cert_files', 'ca-bundle.crt')));
            var s = cert.pem();

            cert.clear();
            assert.deepEqual(cert.pem(), "");

            cert.loadRootCerts();
            var s1 = cert.pem();

            assert.deepEqual(s, s1.slice(s1.length - s.length));
        });

        it("load root ca times", () => {
            function count(ca) {
                var cnt = 1;
                var ca1;

                while (ca1 = ca.next) {
                    cnt++;
                    ca = ca1;
                }

                return cnt;
            }

            cert.clear();
            assert.deepEqual(cert.pem(), "");

            cert.loadRootCerts();
            var cnt1 = count(cert);

            cert.loadRootCerts();
            assert.equal(cnt1, count(cert));

            cert.clear();
            assert.deepEqual(cert.pem(), "");

            cert.loadRootCerts();
            assert.equal(cnt1, count(cert));
        });

        it("unknown format", () => {
            assert.throws(() => {
                cert.import(path.join(__dirname, 'cert_files', 'certdata.txt'));
            });
        });

        it("info", () => {
            cert.clear();
            assert.deepEqual(cert.pem(), "");

            cert.import(ca1);
            assert.equal(cert.version, 3);
            assert.equal(cert.serial, "17");
            assert.equal(cert.issuer, "C=NL, O=PolarSSL, CN=PolarSSL Test CA");
            assert.equal(cert.subject, "C=NL, O=PolarSSL, CN=www.example.com");
            assert.deepEqual(cert.notBefore, new Date("May 10 13:23:41 2012 GMT"));
            assert.deepEqual(cert.notAfter, new Date("May 11 13:23:41 2022 GMT"));
            assert.equal(cert.ca, false);
            assert.equal(cert.pathlen, 0);
            assert.equal(cert.usage, "");
            assert.equal(cert.type, "");
            assert.equal(cert.publicKey, pk);

            cert.import(ca2);

            var cert1 = cert.next;
            assert.equal(cert1.issuer, "C=NL, O=PolarSSL, CN=PolarSSL Test CA");
            assert.equal(cert1.subject, "C=NL, O=PolarSSL, CN=PolarSSL Cert SHA224");
            assert.deepEqual(cert1.notBefore, new Date("Feb 12 14:44:07 2011 GMT"));
            assert.deepEqual(cert1.notAfter, new Date("Feb 12 14:44:07 2021 GMT"));
            assert.equal(cert1.ca, false);
            assert.equal(cert1.pathlen, 0);
            assert.equal(cert1.usage, "");
            assert.equal(cert1.type, "");
            assert.equal(cert1.publicKey, pk);

            cert.import(ca3);

            var cert2 = cert1.next;
            assert.equal(cert2.issuer, "C=CN, O=baoz.cn");
            assert.equal(cert2.subject, "C=CN, O=baoz.cn, CN=baoz.me");
            assert.deepEqual(cert2.notBefore, new Date("Tue Dec 03 2019 15:01:58 GMT+0800 (CST)"));
            assert.deepEqual(cert2.notAfter, new Date("Thu Dec 03 2020 15:01:58 GMT+0800 (CST)"));
            assert.equal(cert2.ca, false);
            assert.equal(cert2.pathlen, 0);
            assert.equal(cert2.usage, "");
            assert.equal(cert2.type, "");
            assert.equal(cert2.publicKey, pub_sm2_pem);
        });
    });

    describe("X509 Crl", () => {
        var crl = new crypto.X509Crl();

        it("load", () => {
            var fl = fs.readdir(path.join(__dirname, 'crl_files'));
            fl.forEach((s) => {
                if (s.match(/\.pem/))
                    crl.import(fs.readTextFile(path.join(__dirname, 'crl_files', s)));
            });
        });

        it("clear/export", () => {
            var s = crl.pem();

            crl.clear();
            assert.deepEqual(crl.pem(), "");

            crl.import(s);

            assert.deepEqual(crl.pem(), s);

            var crl1 = new crypto.X509Crl(s);
            assert.deepEqual(crl1.pem(), s);

            var crl2 = new crypto.X509Crl(crl1.pem(false));
            assert.deepEqual(crl2.pem(), crl1.pem(false));
        });

        it("load x509 crl file", () => {
            var s = crl.pem();
            crl.clear();

            var fl = fs.readdir(path.join(__dirname, 'crl_files'));
            fl.forEach((s) => {
                if (s.match(/\.pem/))
                    crl.import(fs.readFile(path.join(__dirname, 'crl_files', s), 'utf-8'));
            });

            assert.deepEqual(crl.pem(), s);
        });

    });

    describe("X509 Req", () => {
        var req = new crypto.X509Req();
        var fl = fs.readdir(path.join(__dirname, 'req_files'));
        fl.forEach((s) => {
            it("load", () => {
                if (s.match(/\.req/))
                    req.import(fs.readTextFile(path.join(__dirname, 'req_files', s)));
            });

            it("toString", () => {
                assert.equal(req.pem(), req);
            });

            it("import/export pem", () => {
                var s = req.pem();

                var req1 = new crypto.X509Req();
                req1.import(s);

                assert.equal(req1.pem(), s);
                assert.equal(new crypto.X509Req(s).pem(), s);
            });

            it("import/export der", () => {
                var s = req.der();

                var req1 = new crypto.X509Req();
                req1.import(s);

                assert.deepEqual(req1.der(), s);
                assert.deepEqual(new crypto.X509Req(s).der(), s);
            });
        });

        it("create", () => {
            var pk = crypto.PKey.from(rsa4096_pem);

            req = new crypto.X509Req("C=CN, O=baoz.cn, CN=baoz.me", pk);
            assert.deepEqual(req.pem(), req1);
        })

        it("info", () => {
            req.import(req1);
            assert.equal(req.subject, "C=CN, O=baoz.cn, CN=baoz.me");
            assert.equal(req.publicKey, pub_rsa4096_pem);
        });

        it("sm2 info", () => {
            req.import(sm2_req);
            assert.equal(req.subject, "C=CN, O=baoz.cn, CN=baoz.me");
            assert.equal(req.publicKey, pub_sm2_pem);
        });

    });

    describe("CA sign/verify", () => {
        var req;
        var ca;
        var pk;

        function ca_test(private_pem, public_pem, md_alg) {
            it("create", () => {
                pk = crypto.PKey.from(private_pem);
                req = new crypto.X509Req("C=CN, O=baoz.cn, CN=baoz.me", pk, md_alg);
            });

            it("sign", () => {
                var cert = req.sign("C=CN, O=baoz.cn", pk);
                assert.equal(cert.issuer, "C=CN, O=baoz.cn");
                assert.equal(cert.subject, "C=CN, O=baoz.cn, CN=baoz.me");
                assert.equal(cert.publicKey, public_pem);
                assert.equal(cert.serial, "1");
            });

            it("ca/pathlen", () => {
                var cert = req.sign("C=CN, O=baoz.cn", pk);
                assert.isFalse(cert.ca);
                assert.equal(cert.pathlen, 0);

                cert = req.sign("C=CN, O=baoz.cn", pk, {
                    ca: true,
                    pathlen: 10
                });
                assert.isTrue(cert.ca);
                assert.equal(cert.pathlen, 11);
            });

            it("before/after", () => {
                var cert = req.sign("C=CN, O=baoz.cn", pk);
                assert.deepEqual(os.dateAdd(cert.notBefore, 1, "year"), cert.notAfter);

                cert = req.sign("C=CN, O=baoz.cn", pk, {
                    notBefore: new Date("2014-12-20 20:20:20")
                });
                assert.deepEqual(cert.notBefore, new Date("2014-12-20 20:20:20"));
                assert.deepEqual(cert.notAfter, new Date("2015-12-20 20:20:20"));

                cert = req.sign("C=CN, O=baoz.cn", pk, {
                    notBefore: new Date("2014-12-20 20:20:20"),
                    notAfter: new Date("2018-12-20 20:20:20")
                });
                assert.deepEqual(cert.notBefore, new Date("2014-12-20 20:20:20"));
                assert.deepEqual(cert.notAfter, new Date("2018-12-20 20:20:20"));
            });

            it("usage/type", () => {
                var cert = req.sign("C=CN, O=baoz.cn", pk);
                assert.equal(cert.usage, "");
                assert.equal(cert.type, "");

                cert = req.sign("C=CN, O=baoz.cn", pk, {
                    usage: "",
                    type: ""
                });
                assert.equal(cert.usage, "");
                assert.equal(cert.type, "");

                cert = req.sign("C=CN, O=baoz.cn", pk, {
                    usage: "digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign",
                    type: "client, server, email, objsign, reserved, sslCA, emailCA, objCA"
                });
                assert.equal(cert.usage, "digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment, keyAgreement, keyCertSign, cRLSign");
                assert.equal(cert.type, "client, server, email, objsign, reserved, sslCA, emailCA, objCA");
            });

            it("self-sign", () => {
                req = new crypto.X509Req("C=CN, O=baoz.cn, CN=baoz.me", pk);
                ca = req.sign("C=CN, O=baoz.cn, CN=baoz.me", pk, {
                    ca: true,
                    notBefore: new Date(new Date().getTime() - 1000)
                });
            });

            it("verify", () => {
                assert.isTrue(ca.verify(ca));
                assert.isFalse(ca.verify(req.sign("C=CN, O=baoz.cn", pk)));
            });
        }
        ca_test(rsa4096_pem, pub_rsa4096_pem, hash.SHA256);
        // ca_test(sm2_pem, pub_sm2_pem, hash.SM3);
    });

    it('hkdf', () => {
        const kDerivedKeys = {
            short: '5040737377307264',
            long: '55736572732073686f756c64207069636b206c6f6e6720706173737068726' +
                '173657320286e6f74207573652073686f72742070617373776f7264732921',
            empty: ''
        };

        const kSalts = {
            normal: '536f6469756d2043686c6f7269646520636f6d706f756e64',
            empty: ''
        };

        const kInfos = {
            normal: '484b444620657874726120696e666f',
            empty: ''
        };

        const kDerivations = {
            short: {
                normal: {
                    'sha384': {
                        normal: '19ba74368e6b993390f27fe9a7d02bc338173f72be71a19fc744fcdb3fd4b84b',
                        empty: '97601f4e0c53a5d3f3a2810099bc6820ec50083434769b59fc24a417a9543734'
                    },
                    'sha512': {
                        normal: '4bbd6db2435fb696157f6089c977c3c73f3eac5ef3dd6baae604cb53bfbb153e',
                        empty: '2f3157e7fe0c10b01298c8f0886a90edcf80abdef5dbc1df2b1482532b52b934'
                    },
                    'sha1': {
                        normal: '05ad22ed2138c9600e4d9e2725ded301f5d287fbfb5702f999bc6536d3edef98',
                        empty: 'd51b6fb7e599ca30c5ee264593e4b85f2220c7c3ab003157bff8cb4f369c7560'
                    },
                    'sha256': {
                        normal: '2af5901e28849c28443857386aa1ac3bb127e92631c1c051482d6690941772b4',
                        empty: '9e4b719033742101e90f1ad61e2ff3b4256863667296d74389f1f02af2c4e6a6'
                    }
                },
                empty: {
                    'sha384': {
                        normal: 'fb482ff22c4f8d466c4dfe6e29f2cc2ecdabf5884328fbf08a738fd945f166cb',
                        empty: '1e023c17b340533ceaef39230cb8b3bbdbf663a13d6075d0dd326c049478fba5'
                    },
                    'sha512': {
                        normal: 'f17b5bdcd8d7d3d4601036a19436317d1644f9a4e0956efc0e372b83acdacfdb',
                        empty: 'c7b474942f31f83faf5d14731802b1bd49478549cb3a8f3dbfedc4d3209cf5b6'
                    },
                    'sha1': {
                        normal: 'c126f1e6f25a9de42cf7d427059a52ed9601f29a5815cbfbc64bc7f668c6a341',
                        empty: '3215c3f08de70549b051b7033745a8184f8cbaa6b1735330d2bcb6b16f4642ef'
                    },
                    'sha256': {
                        normal: '733c8b6bcfac875c7f08982a6e3ffb560acea6f165476eb83460b9353ed41dfe',
                        empty: 'c8e12774135305c9147f2cc4766e5ead25d8f457b9a1953d52677361ced558fb'
                    }
                }
            },
            long: {
                normal: {
                    'sha384': {
                        normal: 'f91571b521f7eef13e573aa46378659ef3b7f36ffdd1bb055db2cd77d260c467',
                        empty: '68af1c2cf6b9370d2054344798bdbb1847ccf407b7652b793dd136d4640e0348'
                    },
                    'sha512': {
                        normal: '710aae2fdf889e45fe0fb995b2c26b33eb988650ec0faef167028a7a6ccb3638',
                        empty: 'e5de568081c71e562750829871c342758104765ed6f306f0613c9d4bb336f2aa'
                    },
                    'sha1': {
                        normal: '7f957edcbce3cb0b70566e1eb60efd1e405a13304c661d3663778109bf06899c',
                        empty: '3062f3cf1a730b9cef51f02c1dfac85ed91e4b0065eb50ca9fd8b0107e728733'
                    },
                    'sha256': {
                        normal: '31b7d68530a863e717c081ca6917b68650b3dd9a29f30606e2cad199bec14d13',
                        empty: 'e579d1f9e7f08e6f990ffcfcce1ed201c5e37e62cdf606f0ba4aca80427fbc44'
                    }
                },
                empty: {
                    'sha384': {
                        normal: '619eb6f9287395bbd5ed6a67c968465ad82b6c559f3c38b604bbb08f58320b03',
                        empty: 'ff447b423d83fe76836c32337228b56b5bd9bf68d58e7dca4b7cca842a45e11a'
                    },
                    'sha512': {
                        normal: '133e8a7f7ff433690cc88432c2a338c277e5c13756ff878f46753fe6a564e3e5',
                        empty: 'de54f7eec80c9cc66d349fc987f80d461db2ef4ff4e18505d28bd80cb42c7d76'
                    },
                    'sha1': {
                        normal: 'adb93cdbce79b7d51159b6c0131a2b62f23828d26acd685e34c06535e6f77496',
                        empty: '47710d2a7507e05a1ddcc87a7c2f906177a266efb9e622510cccb3713cd08d58'
                    },
                    'sha256': {
                        normal: 'a401d7c9158a29e5c7193ab9730f0748851cc5baadb42cad024b6290fe213436',
                        empty: 'b4f7e7557674d501cbfbc0148ad800c0750189fe295a2aca5e1bf4122c85edf9'
                    }
                }
            },
            empty: {
                normal: {
                    'sha384': {
                        normal: '6a8632e486899dc264f1a1f920593f2880804e0e1adacf94eb4ed5e5f83d0d12',
                        empty: 'ea5012feb58751d5bc8eb64e0deacd597ed710c9f35258ae6b9a087aed0725ae'
                    },
                    'sha512': {
                        normal: 'c797e1d1f2cab7f28a5f43455c10597f943385edfb428cfe2b98bed4a955d7a1',
                        empty: 'e08cdcc4c5a6aa799d86bc03a95475276ebb801d9ade016e14a8fa5b64051651'
                    },
                    'sha1': {
                        normal: 'ab679e67bcb4305fee42ef940e509cddd406e3498f857418a979ab39cf315f51',
                        empty: 'fe422187188c8636d36daad58ef28431a433bf0fef72d1cae735a04bdbbeb9d3'
                    },
                    'sha256': {
                        normal: 'df92b9a9fa9c01b898ceeaa13134832e31cb1c081d16a5235c69d85651e317ac',
                        empty: 'e60d432b06ee889dfab7299a20ec23697531d119fcf766d0988d0acb0c00c7f7'
                    }
                },
                empty: {
                    'sha384': {
                        normal: 'eacb9d6670ff3b1904779a419101b1ffaabd6d6510bd50856801746a871f7b31',
                        empty: '470cc65387ca4a10c7a68a3b5148c8e513daa63101000739c4c6659b86118884'
                    },
                    'sha512': {
                        normal: '57039174f16f5418a86856daeb77f69d4b4d5000334b6dd1f4f4b3e7b3dcb9d3',
                        empty: '9d73c98e791e80ebe5b4cb45693aa32fdd44b5fa3edab3ec82f9d0f4d66905e2'
                    },
                    'sha1': {
                        normal: 'a1bdd8c332c6464a4bb6a2f231aec9a444237eabe04d2f55f2ab25d40c54ebee',
                        empty: '885fc029b3224b896e09e0bbe5eb347ec59e6827c8e857b394f54ff49b88a8f6'
                    },
                    'sha256': {
                        normal: 'b7b86e422ad1c8a571fda528da16a066f42486dd4056792fd93362088e5dd4c2',
                        empty: 'eb70f01dede9afafa449eee1b1286504e1f62388b3f7dd4f956697b0e828fe18'
                    }
                }
            }
        };

        for (var key in kDerivedKeys) {
            for (var salt in kSalts) {
                for (var digest in kDerivations[key][salt]) {
                    for (var info in kInfos) {
                        const result = crypto.hkdfSync(digest, Buffer.from(kDerivedKeys[key], 'hex'), Buffer.from(kSalts[salt], 'hex'), Buffer.from(kInfos[info], 'hex'), 32).hex();
                        assert.equal(result, kDerivations[key][salt][digest][info]);
                    }
                }
            }
        }
    });

    it('pbkdf2', () => {
        var tests = [
            ["password", "salt", 1, 20,
                new Buffer([
                    0x0c, 0x60, 0xc8, 0x0f, 0x96, 0x1f, 0x0e, 0x71,
                    0xf3, 0xa9, 0xb5, 0x24, 0xaf, 0x60, 0x12, 0x06,
                    0x2f, 0xe0, 0x37, 0xa6
                ])
            ],
            ["password", "salt", 2, 20,
                new Buffer([
                    0xea, 0x6c, 0x01, 0x4d, 0xc7, 0x2d, 0x6f, 0x8c,
                    0xcd, 0x1e, 0xd9, 0x2a, 0xce, 0x1d, 0x41, 0xf0,
                    0xd8, 0xde, 0x89, 0x57
                ])
            ],
            ["password", "salt", 4096, 20,
                new Buffer([
                    0x4b, 0x00, 0x79, 0x01, 0xb7, 0x65, 0x48, 0x9a,
                    0xbe, 0xad, 0x49, 0xd9, 0x26, 0xf7, 0x21, 0xd0,
                    0x65, 0xa4, 0x29, 0xc1
                ])
            ],
            ["passwordPASSWORDpassword", "saltSALTsaltSALTsaltSALTsaltSALTsalt", 4096, 25,
                new Buffer([
                    0x3d, 0x2e, 0xec, 0x4f, 0xe4, 0x1c, 0x84, 0x9b,
                    0x80, 0xc8, 0xd8, 0x36, 0x62, 0xc0, 0xe4, 0x4a,
                    0x8b, 0x29, 0x1a, 0x96, 0x4c, 0xf2, 0xf0, 0x70,
                    0x38
                ])
            ]
        ];

        tests.forEach((t) => {
            assert.deepEqual(crypto.pbkdf2(t[0], t[1], t[2], t[3], 'sha1'), t[4]);
        });
    });

    it("getHashes", () => {
        var hashes = crypto.getHashes();
        assert.isArray(hashes);

        assert.greaterThan(hashes.length, 1);

        assert.isTrue(hashes.includes('md5'))
        assert.isTrue(hashes.includes('sha384'))
    });

    it("FIX: Illegal iterations and size parameters will cause crypto.pbkdf1 to crash", () => {
        assert.throws(() => {
            crypto.pbkdf1(null, null, 0, -1, 1);
        })
    });

    it("FIX: Illegal iterations and size parameters will cause crypto.pbkdf2 to crash", () => {
        assert.throws(() => {
            crypto.pbkdf2(null, null, 0, -1, 1);
        })
    });
});

require.main === module && test.run(console.DEBUG);