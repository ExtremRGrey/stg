function FindProxyForURL(url, host)
{
    if (dnsDomainIs(host, 'stg-m.keiba.rakuten.co.jp'))   return 'DIRECT';
    if (dnsDomainIs(host, 'auction.keiba.rakuten.co.jp')) return 'PROXY stg.checkproxy.rakuten-it.com:9502';
    if (dnsDomainIs(host, 'keiba.r10s.jp'))               return 'PROXY stg.checkproxy.rakuten-it.com:9502';

    if (dnsDomainIs(host, 'bet.keiba.rakuten.co.jp'))     return 'PROXY stg.checkproxy.rakuten-it.com:9604';
    if (dnsDomainIs(host, 'my.keiba.rakuten.co.jp'))      return 'PROXY stg.checkproxy.rakuten-it.com:9604';
    if (dnsDomainIs(host, 'keiba.rakuten.co.jp'))         return 'PROXY stg.checkproxy.rakuten-it.com:9604';
    if (dnsDomainIs(host, 'keiba.intra.rakuten-it.com'))  return 'PROXY stg.checkproxy.rakuten-it.com:9604';

    if (dnsDomainIs(host, 'api.oubo.rakuten.co.jp'))      return 'PROXY stg.checkproxy.rakuten-it.com:9609';
    if (dnsDomainIs(host, 'stg.rat.rakuten.co.jp'))       return 'PROXY stg.checkproxy.rakuten-it.com:9609';

    // RAE
    if (dnsDomainIs(host, 'stg.app.rakuten.co.jp'))            return 'DIRECT';
    if (dnsDomainIs(host, 'stg.24x7.app.rakuten.co.jp'))       return 'DIRECT';
    if (dnsDomainIs(host, 'stg-challenger.api.rakuten.co.jp')) return 'DIRECT';

    // RUNA
    if (dnsDomainIs(host, 'rd.rakuten.co.jp'))        return 'DIRECT';
    if (dnsDomainIs(host, 's-ad.rmp.rakuten.co.jp'))  return 'DIRECT';
    if (dnsDomainIs(host, 's-cdn.rmp.rakuten.co.jp')) return 'DIRECT';
    if (dnsDomainIs(host, 's-dlv.rmp.rakuten.co.jp')) return 'DIRECT';
    if (dnsDomainIs(host, 's-evt.rmp.rakuten.co.jp')) return 'DIRECT';

    // Temporary fix (LLSQAG-31452)
    if (dnsDomainIs(host, 'privacy.rakuten.co.jp')) return 'DIRECT';

    // RAT
    if (dnsDomainIs(host, 'rat.intra.rakuten-it.com')) return 'DIRECT';
    if (dnsDomainIs(host, 'check.secure.rat.rakuten.co.jp')) return 'DIRECT';

    // Internal domains
    if (dnsDomainIs(host, 'r10s.jp'))                         return 'PROXY stg.checkproxy.rakuten-it.com:9502';
    if (dnsDomainIs(host, 'rakuten.co.jp'))                   return 'PROXY stg.checkproxy.rakuten-it.com:9502';
    if (dnsDomainIs(host, 'giantpanda.intra.rakuten-it.com')) return 'PROXY stg.checkproxy.rakuten-it.com:9502';
    if (dnsDomainIs(host, 'felix.intra.rakuten-it.com'))      return 'PROXY stg.checkproxy.rakuten-it.com:9502';
    if (dnsDomainIs(host, 'felix-api.intra.rakuten-it.com'))  return 'PROXY stg.checkproxy.rakuten-it.com:9502';
    if (dnsDomainIs(host, 'stg.jp.local'))                    return 'PROXY stg.checkproxy.rakuten-it.com:9502';

    return 'DIRECT';
}
